import PriorityQueue from "js-priority-queue";
import fsPromise from "fs-promise";

export default (async function multibundle(
  builder,
  entryPoints,
  {
    traceOpts = {},
    maxBundles,
    minModules,
    configFile = "jspm.bundles.js",
    outFileFn = getBundleName
  } = {}
) {
  let {
    entryPointMappings,
    allLoadRecords
  } = await mapEntryPoints(builder, entryPoints, { traceOpts });
  let bundles = createBundles(entryPointMappings);
  let collapsed = collapseBundles(bundles, { maxBundles, minModules });
  let bundleConfig = await doBundle(
    builder,
    collapsed,
    allLoadRecords,
    entryPoints,
    { traceOpts, outFileFn }
  );
  await writeConfig(bundleConfig, { configFile });
  return bundleConfig;
});

/**
 * @private
 *
 * Walk all the entry points and associate with each module.
 */
async function mapEntryPoints(builder, entryPoints, { traceOpts }) {
  let entryPointMappings = {};
  let allLoadRecords = {};
  let allPriorities = new Set();
  for (let expression in entryPoints) {
    let { priority } = entryPoints[expression];
    allPriorities.add(priority);
    let tree = await builder.trace(expression, {...traceOpts});
    walkEntryPoint(
      tree,
      expression,
      priority,
      entryPointMappings,
      allLoadRecords
    );
  }
  return { entryPointMappings, allLoadRecords, allPriorities };
}

/**
 * @private
 *
 * Walk the expression and populate `entryPointMappings` with the given entry
 * point.
 */
function walkEntryPoint(
  tree,
  expression,
  priority,
  entryPointMappings,
  allLoadRecords
) {
  let modules = Object.keys(tree);
  for (let key of modules) {
    let mapping = entryPointMappings[key];
    allLoadRecords[key] = tree[key];
    if (!mapping || mapping.priority > priority) {
      mapping = (entryPointMappings[key] = {
        entryPoints: new Set(),
        priority
      });
    }
    if (mapping.priority < priority) {
      continue;
    }
    mapping.entryPoints.add(expression);
  }
}

/**
 * @private
 *
 * Construce the bundles from the mappings.
 */
function createBundles(entryPointMappings) {
  let bundles = {};
  for (let key in entryPointMappings) {
    let { entryPoints } = entryPointMappings[key];
    let bundleKey = getBundleKey(entryPoints);
    let bundle = bundles[bundleKey];
    if (!bundle) {
      bundle = (bundles[bundleKey] = {
        entryPoints: entryPoints,
        modules: new Set()
      });
    }
    bundle.modules.add(key);
  }
  return bundles;
}


/**
 * @private
 *
 * Collapse bundles based on the `maxBundles` and `minModules` options.
 */
function collapseBundles(bundles, { maxBundles, minModules }) {
  let queue = new PriorityQueue({
    comparator: (a, b) => a.modules.size - b.modules.size
  });
  for (let bundleKey in bundles) {
    queue.queue(bundles[bundleKey]);
  }
  while (
    (maxBundles && queue.length > maxBundles) ||
    (minModules && queue.length > 1 && queue.peek().modules.size < minModules)
  ) {
    let a = queue.dequeue(), b = queue.dequeue();
    let merged = mergeBundles(a, b);
    queue.queue(merged);
  }
  let collapsedBundles = {};
  while (queue.length > 0) {
    let bundle = queue.dequeue();
    let bundleKey = getBundleKey(bundle.entryPoints);
    collapsedBundles[bundleKey] = bundle;
  }
  return collapsedBundles;
}

function mergeBundles(a, b) {
  return {
    entryPoints: setUnion(a.entryPoints, b.entryPoints),
    modules: setUnion(a.modules, b.modules)
  };
}

/**
 * @private
 *
 * Create a unique identifier for a set of entry points.
 */
function getBundleKey(entryPoints) {
  return Array.from(entryPoints).sort().join("::");
}

function setUnion(a, b) {
  let res = new Set(a);
  for (let obj of b) {
    res.add(obj);
  }
  return res;
}

async function doBundle(
  builder,
  bundles,
  allLoadRecords,
  entryPoints,
  { traceOpts, outFileFn }
) {
  let index = 0;
  let bundleConfig = {};
  for (let bundleKey in bundles) {
    let bundle = bundles[bundleKey];
    let meta;
    // If the bundle only contains a single entry point, we include additional
    // information about that bundle from the entry points configuration.
    if (bundle.entryPoints.size === 1) {
      meta = entryPoints[Array.from(bundle.entryPoints)[0]];
    } else {
      meta = {};
    }
    let tree = await treeFromBundle(builder, bundle, allLoadRecords, {
      traceOpts
    });
    let outFile;
    if(meta.outFile) {
      outFile = meta.outFile;
    } else {
      outFile = outFileFn(index++, bundle, meta);
    }
    let output = await builder.bundle(tree, outFile, {...traceOpts});
    if (meta.include !== false) {
      bundleConfig[outFile] = output.modules;
    }
  }
  return bundleConfig;
}

async function treeFromBundle(builder, bundle, allLoadRecords, { traceOpts }) {
  let tree = {};
  for (let key of bundle.modules) {
    let loadRecord = allLoadRecords[key];
    tree[key] = loadRecord;
  }
  return tree;
}

async function writeConfig(
  bundleConfig,
  { configFile }
) {
  let contents = `SystemJS.config({bundles:${JSON.stringify(bundleConfig)}});`;
  return fsPromise.writeFile(configFile, contents);
}

function getBundleName(index, bundle, meta) {
  return `bundle-${index}.js`;
}
