# SystemJS Multibundle

This project aims to automate the construction of multiple SystemJS bundles based on a set of common entry points. The algorithm seeks to satisfy the following conditions:

1. No module is included in more than one bundle.
2. For a given entry point, as few unrelated modules are included in its associated bundles as possible.

## Usage

```javascript
import multibundle from 'systemjs-multibundle';

multibundle(builder, entryPoints, {
  configFile,
  minModules,
  maxBundles,
  traceOpts
});
```

See the tests for examples.
