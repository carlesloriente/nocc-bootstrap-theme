module.exports = {
  static: [
    {
      source: './src/fonts',
      target: './dist/src/fonts'
    },
    {
      source: './src/icons',
      target: './dist/src/icons'
    },
    {
      source: './src/js',
      target: './dist/src/js'
    },
    {
      source: './src/styles',
      target: './dist/src/styles'
    },
    {
      source: './src/fonts',
      target: './dist/fonts'
    },
    {
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
      source: './package.json',
      target: './dist/package.json'
    },
    {
      source: './AUTHORS.md',
      target: './dist/AUTHORS.md'
    },
    {
      source: './CODE_OF_CONDUCT.md',
      target: './dist/CODE_OF_CONDUCT.md'
    },
    {
      source: './CONTRIBUTING.md',
      target: './dist/CONTRIBUTING.md'
    },
    {
      source: './LICENSE',
      target: './dist/LICENSE'
    },
    {
      source: './README.md',
      target: './dist/README.md'
    }
  ],
  sass: [
    {
      source: './src/styles/main.scss',
      target: './dist/css/nocc-theme.css'
    }
  ],
  manifest: {
    target: "./dist/manifest.json",
    key: "short",
    baseURI: "../",
    webRoot: "./dist"
  },
}