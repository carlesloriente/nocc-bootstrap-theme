"use strict";

var targetBaseDir = "./demo/assets/vendor/nocc-bootstrap-theme"

module.exports = {
  watchDirs: ["./src/js", "./src/styles"],

  manifest: {
    key: "short",
    webRoot: "./demo",
    target: "./demo/manifest.json",
  },

  static: [{
    source: './dist/css',
    target: targetBaseDir + '/css'
    }, {
    source: './dist/fonts',
    target: targetBaseDir + '/fonts'
    }, {
      source: './dist/icons',
      target: targetBaseDir + '/icons'
    }, {
      source: './dist/images',
      target: targetBaseDir + '/images'
    }, {
      source: './dist/js',
      target: targetBaseDir + '/js'
    }, {
      source: './static',
      target: './demo'
  }],
  
}