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