"use strict";

var targetBaseDir = "./dist"

module.exports = {

  manifest: {
    key: "short",
    webRoot: "./docs",
    target: targetBaseDir + "/manifest.json"
  },

  sass: [{
    source: './src/styles/main.scss',
    target: targetBaseDir + '/css/nocc-theme.css'
  }],

  js: [{
    source: './src/js/jq-bootstrap-validation.js',
    target: targetBaseDir + '/js/jq-bootstrap-validation.js',
    compact: 'minify'
  }, {
    source: './src/js/theme-toggler.js',
    target: targetBaseDir + '/js/theme-toggler.js',
    compact: 'minify'
  }],

  static: [{
    source: './src/fonts',
    target: targetBaseDir + '/src/fonts'
  }, {
    source: './src/icons',
    target: targetBaseDir + '/src/icons'
  }, {
    source: './src/js',
    target: targetBaseDir + '/src/js'
  }, {
    source: './src/styles',
    target: targetBaseDir + '/src/styles'
  }, {
    source: './src/fonts',
    target: targetBaseDir + '/fonts'
  }, {
    source: './src/icons',
    target: targetBaseDir + '/icons'
  }, {
    source: './src/images',
    target: targetBaseDir + '/images'
  }, {
    source: './src/js',
    target: targetBaseDir + '/js'
  }, {
    source: './package.json',
    target: targetBaseDir + '/package.json'
  }, {
    source: './AUTHORS.md',
    target: targetBaseDir + '/AUTHORS.md'
  }, {
    source: './CODE_OF_CONDUCT.md',
    target: targetBaseDir + '/CODE_OF_CONDUCT.md'
  }, {
    source: './CONTRIBUTING.md',
    target: targetBaseDir +'/CONTRIBUTING.md'
  }, {
    source: './LICENSE',
    target: targetBaseDir +'/LICENSE'
  }, {
    source: './README.md',
    target: targetBaseDir +'/README.md'
  }],

}