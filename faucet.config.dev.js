module.exports = {
  static: [
    {
      source: './src/fonts',
      target: './dist/nocc-bootstrap-theme/fonts'
    },    {
      source: './src/icons',
      target: './dist/nocc-bootstrap-theme/icons'
    },
    {
      source: './src/images',
      target: './dist/nocc-bootstrap-theme/images'
    },
    {
      source: './src/js',
      target: './dist/nocc-bootstrap-theme/js'
    },
    {
      source: './dist/nocc-bootstrap-theme/js',
      target: './demo/nocc-bootstrap-theme/js'
    },
    {
      source: './dist/nocc-bootstrap-theme/css/nocc-theme.css',
      target: './demo/nocc-bootstrap-theme/css/nocc-theme.css'
    },
    {
      source: './dist/nocc-bootstrap-theme/fonts',
      target: './demo/nocc-bootstrap-theme/fonts'
    },
    {
      source: './dist/nocc-bootstrap-theme/images',
      target: './demo/nocc-bootstrap-theme/images'
    },
    {
      source: './dist/nocc-bootstrap-theme/icons',
      target: './demo/nocc-bootstrap-theme/icons'
    },
    {
      source: './bootstrap/dist/js',
      target: './demo/nocc-bootstrap-theme/js'
    },
    {
      source: './static',
      target: './demo'
    }
  ],
  sass: [
    {
      source: './src/styles/main.scss',
      target: './dist/nocc-bootstrap-theme/css/nocc-theme.css'
    }
  ],
  manifest: {
    target: "./dist/manifest.json",
    key: "short",
    baseURI: "../",
    webRoot: "./dist"
  },
}