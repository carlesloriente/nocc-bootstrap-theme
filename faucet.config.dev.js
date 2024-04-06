module.exports = {
  static: [
    {
      source: './src/fonts',
      target: './demo/fonts'
    },    {
      source: './src/icons',
      target: './demo/icons'
    },
    {
      source: './src/images',
      target: './demo/images'
    },
    {
      source: './src/js',
      target: './demo/js'
    },
    {
      source: './static',
      target: './demo'
    }
  ],
  sass: [
    {
      source: './src/styles/main.scss',
      target: './demo/css/nocc-theme.css'
    }
  ],
  manifest: {
    target: "./dist/manifest.json",
    key: "short",
    baseURI: "../",
    webRoot: "./dist"
  },
}