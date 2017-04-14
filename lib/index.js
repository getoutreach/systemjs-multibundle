"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * @private
 *
 * Walk all the entry points and associate with each module.
 */
var mapEntryPoints = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(builder, entryPoints, _ref5) {
    var traceOpts = _ref5.traceOpts;
    var entryPointMappings, allLoadRecords, allPriorities, expression, priority, tree;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            entryPointMappings = {};
            allLoadRecords = {};
            allPriorities = new _set2.default();
            _context2.t0 = _regenerator2.default.keys(entryPoints);

          case 4:
            if ((_context2.t1 = _context2.t0()).done) {
              _context2.next = 14;
              break;
            }

            expression = _context2.t1.value;
            priority = entryPoints[expression].priority;

            allPriorities.add(priority);
            _context2.next = 10;
            return builder.trace(expression, traceOpts);

          case 10:
            tree = _context2.sent;

            walkEntryPoint(tree, expression, priority, entryPointMappings, allLoadRecords);
            _context2.next = 4;
            break;

          case 14:
            return _context2.abrupt("return", { entryPointMappings: entryPointMappings, allLoadRecords: allLoadRecords, allPriorities: allPriorities });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function mapEntryPoints(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * @private
 *
 * Walk the expression and populate `entryPointMappings` with the given entry
 * point.
 */


var doBundle = function () {
  var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(builder, bundles, allLoadRecords, entryPoints, _ref8) {
    var traceOpts = _ref8.traceOpts,
        outFileFn = _ref8.outFileFn;
    var index, bundleConfig, bundleKey, bundle, meta, tree, outFile, output;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            index = 0;
            bundleConfig = {};
            _context3.t0 = _regenerator2.default.keys(bundles);

          case 3:
            if ((_context3.t1 = _context3.t0()).done) {
              _context3.next = 19;
              break;
            }

            bundleKey = _context3.t1.value;
            bundle = bundles[bundleKey];
            meta = void 0;
            // If the bundle only contains a single entry point, we include additional
            // information about that bundle from the entry points configuration.

            if (bundle.entryPoints.size === 1) {
              meta = entryPoints[(0, _from2.default)(bundle.entryPoints)[0]];
            } else {
              meta = {};
            }
            _context3.next = 10;
            return treeFromBundle(builder, bundle, allLoadRecords, {
              traceOpts: traceOpts
            });

          case 10:
            tree = _context3.sent;
            outFile = void 0;

            if (meta.outFile) {
              outFile = meta.outFile;
            } else {
              outFile = outFileFn(index++, bundle, meta);
            }
            _context3.next = 15;
            return builder.bundle(tree, outFile, traceOpts);

          case 15:
            output = _context3.sent;

            if (meta.include !== false) {
              bundleConfig[outFile] = output.modules;
            }
            _context3.next = 3;
            break;

          case 19:
            return _context3.abrupt("return", bundleConfig);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function doBundle(_x7, _x8, _x9, _x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}();

var treeFromBundle = function () {
  var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(builder, bundle, allLoadRecords, _ref10) {
    var traceOpts = _ref10.traceOpts;

    var tree, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, key, loadRecord;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            tree = {};
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context4.prev = 4;

            for (_iterator3 = (0, _getIterator3.default)(bundle.modules); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              key = _step3.value;
              loadRecord = allLoadRecords[key];

              tree[key] = loadRecord;
            }
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](4);
            _didIteratorError3 = true;
            _iteratorError3 = _context4.t0;

          case 12:
            _context4.prev = 12;
            _context4.prev = 13;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 15:
            _context4.prev = 15;

            if (!_didIteratorError3) {
              _context4.next = 18;
              break;
            }

            throw _iteratorError3;

          case 18:
            return _context4.finish(15);

          case 19:
            return _context4.finish(12);

          case 20:
            return _context4.abrupt("return", tree);

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[4, 8, 12, 20], [13,, 15, 19]]);
  }));

  return function treeFromBundle(_x12, _x13, _x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();

var writeConfig = function () {
  var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(bundleConfig, _ref12) {
    var configFile = _ref12.configFile;
    var contents;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            contents = "SystemJS.config({bundles:" + (0, _stringify2.default)(bundleConfig) + "});";
            return _context5.abrupt("return", _fsPromise2.default.writeFile(configFile, contents));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function writeConfig(_x16, _x17) {
    return _ref11.apply(this, arguments);
  };
}();

var _jsPriorityQueue = require("js-priority-queue");

var _jsPriorityQueue2 = _interopRequireDefault(_jsPriorityQueue);

var _fsPromise = require("fs-promise");

var _fsPromise2 = _interopRequireDefault(_fsPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(builder, entryPoints) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref2$traceOpts = _ref2.traceOpts,
        traceOpts = _ref2$traceOpts === undefined ? {} : _ref2$traceOpts,
        maxBundles = _ref2.maxBundles,
        minModules = _ref2.minModules,
        _ref2$configFile = _ref2.configFile,
        configFile = _ref2$configFile === undefined ? "jspm.bundles.js" : _ref2$configFile,
        _ref2$outFileFn = _ref2.outFileFn,
        outFileFn = _ref2$outFileFn === undefined ? getBundleName : _ref2$outFileFn;

    var _ref3, entryPointMappings, allLoadRecords, bundles, collapsed, bundleConfig;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return mapEntryPoints(builder, entryPoints, { traceOpts: traceOpts });

          case 2:
            _ref3 = _context.sent;
            entryPointMappings = _ref3.entryPointMappings;
            allLoadRecords = _ref3.allLoadRecords;
            bundles = createBundles(entryPointMappings);
            collapsed = collapseBundles(bundles, { maxBundles: maxBundles, minModules: minModules });
            _context.next = 9;
            return doBundle(builder, collapsed, allLoadRecords, entryPoints, { traceOpts: traceOpts, outFileFn: outFileFn });

          case 9:
            bundleConfig = _context.sent;
            _context.next = 12;
            return writeConfig(bundleConfig, { configFile: configFile });

          case 12:
            return _context.abrupt("return", bundleConfig);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function multibundle(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return multibundle;
}();

function walkEntryPoint(tree, expression, priority, entryPointMappings, allLoadRecords) {
  var modules = (0, _keys2.default)(tree);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(modules), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var mapping = entryPointMappings[key];
      allLoadRecords[key] = tree[key];
      if (!mapping || mapping.priority > priority) {
        mapping = entryPointMappings[key] = {
          entryPoints: new _set2.default(),
          priority: priority
        };
      }
      if (mapping.priority < priority) {
        continue;
      }
      mapping.entryPoints.add(expression);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * @private
 *
 * Construce the bundles from the mappings.
 */
function createBundles(entryPointMappings) {
  var bundles = {};
  for (var key in entryPointMappings) {
    var entryPoints = entryPointMappings[key].entryPoints;

    var bundleKey = getBundleKey(entryPoints);
    var bundle = bundles[bundleKey];
    if (!bundle) {
      bundle = bundles[bundleKey] = {
        entryPoints: entryPoints,
        modules: new _set2.default()
      };
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
function collapseBundles(bundles, _ref6) {
  var maxBundles = _ref6.maxBundles,
      minModules = _ref6.minModules;

  var queue = new _jsPriorityQueue2.default({
    comparator: function comparator(a, b) {
      return a.modules.size - b.modules.size;
    }
  });
  for (var bundleKey in bundles) {
    queue.queue(bundles[bundleKey]);
  }
  while (maxBundles && queue.length > maxBundles || minModules && queue.length > 1 && queue.peek().modules.size < minModules) {
    var a = queue.dequeue(),
        b = queue.dequeue();
    var merged = mergeBundles(a, b);
    queue.queue(merged);
  }
  var collapsedBundles = {};
  while (queue.length > 0) {
    var bundle = queue.dequeue();
    var _bundleKey = getBundleKey(bundle.entryPoints);
    collapsedBundles[_bundleKey] = bundle;
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
  return (0, _from2.default)(entryPoints).sort().join("::");
}

function setUnion(a, b) {
  var res = new _set2.default(a);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(b), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var obj = _step2.value;

      res.add(obj);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return res;
}

function getBundleName(index, bundle, meta) {
  return "bundle-" + index + ".js";
}