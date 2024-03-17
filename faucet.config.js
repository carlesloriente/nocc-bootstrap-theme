module.exports = {
  static: [
    {
      source: './src/fonts',
      target: './dist/nocc-bootstrap-theme/fonts'
    },
    {
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
      source: './scripts/',
      target: './dist/scripts'
    },
    {
      source: './src/',
      target: './dist/src'
    },
    {
      source: './static/',
      target: './dist/static'
    },
    {
      source: './faucet.config.js',
      target: './dist/faucet.config.js'
    },
    {
      source: './faucet.config.dev.js',
      target: './dist/faucet.config.dev.js'
    },
    {
      source: './.sass-lint.yml',
      target: './dist/sass-lint.yml'
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