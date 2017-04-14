import chai, { expect } from "chai";
import chaiFs from "chai-fs";
chai.use(chaiFs);

import multibundle from "../lib/index";
import SystemJSBuilder from "systemjs-builder";

import rimraf from "rimraf";

describe("multibundle()", function() {
  beforeEach(function() {
    rimraf.sync(this.destDir);
  });

  lazy("builder", function() {
    return new SystemJSBuilder("test/example", "test/example/jspm.config.js");
  });

  lazy("destDir", () => "tmp/testbuild");
  lazy("configFile", function() {
    return `${this.destDir}/jspm.bundles.js`;
  });
  lazy("outFileFn", function() {
    return (index, bundle, name) => {
      return `${this.destDir}/bundle-${index}.js`;
    };
  });

  lazy("traceOpts", () => ({}));

  subject(function() {
    return multibundle(
      this.builder,
      {
        "app/main.js": {
          priority: 1,
          outFile: "tmp/testbuild/main.js",
          include: false
        },
        "app/entry-a.js": {
          priority: 2
        },
        "app/entry-b.js": {
          priority: 2
        },
        "app/entry-c.js": {
          priority: 2
        },
        "app/orphan-a.js": {
          priority: 3
        }
      },
      {
        minModules: 2,
        outFileFn: this.outFileFn,
        configFile: this.configFile,
        traceOpts: this.traceOpts
      }
    );
  });

  it("creates multiple bundles", async function() {
    let result = await this.subject;

    expect("tmp/test/build/jspm.bundles.js").to.be.a.file;
    expect("tmp/test/build/main.hs").to.be.a.file;
  });

  context("with advanced trace options", function() {
    lazy("traceOpts", () => ({
      tracePackageConfig: true,
      normalize: true,
      inlineConditions: true,
      browser: true,
      production: true,
      mangle: false,
      minify: false
    }));

    it("applies trace options", async function() {
      let result = await this.subject;

      expect("tmp/test/build/main.hs").to.be.a.file;
    });
  });
});
