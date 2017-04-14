SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/",
    "paths": {
      "app/": "src/"
    }
  },
  nodeConfig: {
    "paths": {
      "app/": ""
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
      "react": "npm:react@15.5.4",
      "process": "npm:jspm-nodelibs-process@0.2.1",
      "stream": "npm:jspm-nodelibs-stream@0.2.1",
      "util": "npm:jspm-nodelibs-util@0.2.2",
      "fs": "npm:jspm-nodelibs-fs@0.2.1",
      "path": "npm:jspm-nodelibs-path@0.2.3",
      "assert": "npm:jspm-nodelibs-assert@0.2.1",
      "https": "npm:jspm-nodelibs-https@0.2.2",
      "zlib": "npm:jspm-nodelibs-zlib@0.2.3",
      "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
      "url": "npm:jspm-nodelibs-url@0.2.1",
      "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
      "http": "npm:jspm-nodelibs-http@0.2.0",
      "domain": "npm:jspm-nodelibs-domain@0.2.1",
      "events": "npm:jspm-nodelibs-events@0.2.2",
      "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
      "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
      "vm": "npm:jspm-nodelibs-vm@0.2.1",
      "constants": "npm:jspm-nodelibs-constants@0.2.1",
      "os": "npm:jspm-nodelibs-os@0.2.1"
    },
    "packages": {
      "npm:react@15.5.4": {
        "map": {
          "fbjs": "npm:fbjs@0.8.12",
          "prop-types": "npm:prop-types@15.5.8",
          "loose-envify": "npm:loose-envify@1.3.1",
          "object-assign": "npm:object-assign@4.1.1"
        }
      },
      "npm:fbjs@0.8.12": {
        "map": {
          "loose-envify": "npm:loose-envify@1.3.1",
          "object-assign": "npm:object-assign@4.1.1",
          "setimmediate": "npm:setimmediate@1.0.5",
          "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
          "promise": "npm:promise@7.1.1",
          "core-js": "npm:core-js@1.2.7",
          "ua-parser-js": "npm:ua-parser-js@0.7.12"
        }
      },
      "npm:prop-types@15.5.8": {
        "map": {
          "fbjs": "npm:fbjs@0.8.12"
        }
      },
      "npm:loose-envify@1.3.1": {
        "map": {
          "js-tokens": "npm:js-tokens@3.0.1"
        }
      },
      "npm:isomorphic-fetch@2.2.1": {
        "map": {
          "node-fetch": "npm:node-fetch@1.6.3",
          "whatwg-fetch": "npm:whatwg-fetch@2.0.3"
        }
      },
      "npm:promise@7.1.1": {
        "map": {
          "asap": "npm:asap@2.0.5"
        }
      },
      "npm:jspm-nodelibs-stream@0.2.1": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:node-fetch@1.6.3": {
        "map": {
          "encoding": "npm:encoding@0.1.12",
          "is-stream": "npm:is-stream@1.1.0"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.2.9"
        }
      },
      "npm:encoding@0.1.12": {
        "map": {
          "iconv-lite": "npm:iconv-lite@0.4.15"
        }
      },
      "npm:readable-stream@2.2.9": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "core-util-is": "npm:core-util-is@1.0.2",
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "string_decoder": "npm:string_decoder@1.0.0",
          "isarray": "npm:isarray@1.0.0"
        }
      },
      "npm:jspm-nodelibs-zlib@0.2.3": {
        "map": {
          "browserify-zlib": "npm:browserify-zlib@0.1.4"
        }
      },
      "npm:browserify-zlib@0.1.4": {
        "map": {
          "readable-stream": "npm:readable-stream@2.2.9",
          "pako": "npm:pako@0.2.9"
        }
      },
      "npm:jspm-nodelibs-buffer@0.2.3": {
        "map": {
          "buffer": "npm:buffer@5.0.6"
        }
      },
      "npm:string_decoder@1.0.0": {
        "map": {
          "buffer-shims": "npm:buffer-shims@1.0.0"
        }
      },
      "npm:jspm-nodelibs-url@0.2.1": {
        "map": {
          "url": "npm:url@0.11.0"
        }
      },
      "npm:jspm-nodelibs-domain@0.2.1": {
        "map": {
          "domain-browser": "npm:domain-browser@1.1.7"
        }
      },
      "npm:jspm-nodelibs-http@0.2.0": {
        "map": {
          "http-browserify": "npm:stream-http@2.7.0"
        }
      },
      "npm:stream-http@2.7.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.2.9",
          "xtend": "npm:xtend@4.0.1",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
          "builtin-status-codes": "npm:builtin-status-codes@3.0.0"
        }
      },
      "npm:buffer@5.0.6": {
        "map": {
          "base64-js": "npm:base64-js@1.2.0",
          "ieee754": "npm:ieee754@1.1.8"
        }
      },
      "npm:jspm-nodelibs-string_decoder@0.2.1": {
        "map": {
          "string_decoder": "npm:string_decoder@0.10.31"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "punycode": "npm:punycode@1.3.2",
          "querystring": "npm:querystring@0.2.0"
        }
      },
      "npm:jspm-nodelibs-crypto@0.2.1": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "randombytes": "npm:randombytes@2.0.3",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "browserify-sign": "npm:browserify-sign@4.0.4",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "create-ecdh": "npm:create-ecdh@4.0.0"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "sha.js": "npm:sha.js@2.4.8",
          "ripemd160": "npm:ripemd160@1.0.1"
        }
      },
      "npm:browserify-sign@4.0.4": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3",
          "create-hmac": "npm:create-hmac@1.1.4",
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.4.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.1.0"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.1.0"
        }
      },
      "npm:pbkdf2@3.0.9": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "miller-rabin": "npm:miller-rabin@4.0.0"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.4.0"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "browserify-des": "npm:browserify-des@1.0.0"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:sha.js@2.4.8": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:elliptic@6.4.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "hash.js": "npm:hash.js@1.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
          "hmac-drbg": "npm:hmac-drbg@1.0.1",
          "brorand": "npm:brorand@1.1.0"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.3",
          "inherits": "npm:inherits@2.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:parse-asn1@5.1.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "asn1.js": "npm:asn1.js@4.9.1"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.1.0"
        }
      },
      "npm:hmac-drbg@1.0.1": {
        "map": {
          "hash.js": "npm:hash.js@1.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:asn1.js@4.9.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:jspm-nodelibs-os@0.2.1": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "main.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {},
  packages: {}
});
