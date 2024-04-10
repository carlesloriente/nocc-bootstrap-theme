module.exports = {
  static: [
    {
      source: './src/fonts',
      target: './demo/assets/vendor/nocc-bootstrap-theme/fonts'
    },    {
      source: './src/icons',
      target: './demo/assets/vendor/nocc-bootstrap-theme/icons'
    },
    {
      source: './src/images',
      target: './demo/assets/vendor/nocc-bootstrap-theme/images'
    },
    {
      source: './src/js',
      target: './demo/assets/vendor/nocc-bootstrap-theme/js'
    },
    {
      source: './static',
      target: './demo'
    }
  ],
  sass: [
    {
      source: './src/styles/main.scss',
      target: './demo/assets/vendor/nocc-bootstrap-theme/css/nocc-theme.css'
    }
  ],
  manifest: {
    target: "./dist/manifest.json",
    key: "short",
    baseURI: "../",
    webRoot: "./dist"
  },
}