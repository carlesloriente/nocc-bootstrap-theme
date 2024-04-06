module.exports = {
  static: [
    {
      source: './bootstrap',
      target: './dist/bootstrap'
    },
    {
      source: './src',
      target: './dist/src'
    },
    {
      source: './faucet.config.js',
      target: './dist/faucet.config.js'
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
      target: './dist/src/css/nocc-theme.css'
    }
  ],
  manifest: {
    target: "./dist/manifest.json",
    key: "short",
    baseURI: "../",
    webRoot: "./dist"
  },
}