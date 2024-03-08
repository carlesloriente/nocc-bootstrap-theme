module.exports = {
  static: [
    {
      source: './src/fonts',
      target: './dist/fonts'
    },    {
      source: './src/icons',
      target: './dist/icons'
    },
    {
      source: './src/images',
      target: './dist/images'
    },
    {
      source: './src/js',
      target: './dist/js'
    },
    {
      source: './src/ko-fi',
      target: './dist/ko-fi'
    },
    {
      source: './dist/css/nocc-bootstrap-theme.css',
      target: './documentation/docs/5.3/dist/css/bootstrap.css'
    },
    {
      source: './dist/fonts',
      target: './documentation/docs/5.3/dist/fonts'
    },
    {
      source: './dist/images',
      target: './documentation/docs/5.3/dist/images'
    },
    {
      source: './bootstrap/dist/js',
      target: './documentation/docs/5.3/dist/js'
    },
    {
      source: './static',
      target: './documentation'
    }
  ],
  sass: [
    {
      source: './src/styles/main.scss',
      target: './dist/css/nocc-bootstrap-theme.css'
    }
  ],
  manifest: {
    target: "./dist/manifest.json",
    key: "short",
    baseURI: "../",
    webRoot: "./dist"
  },
}