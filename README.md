# NOCC A Bootstrap 5 Theme

## Usage

This theme is a complete replacement for Bootstrap 5.3. You do not need to include
both, `bootstrap.css` and `nocc-bootstrap-theme.css`. The latter is sufficient.

  npm install nocc-bootstrap-theme --save

If you like to use this theme in your own Sass code and installed this theme
with NPM you can import the source files to your manifest (e.g. `index.scss`)
as well.

  ```scss
  @import "nocc-bootstrap-theme/src/styles/index.scss";
  ```

If you need documentation or help with Bootstrap or its components in general,
please head over to

<https://getbootstrap.com>

## Development

### Setup

* Install node v8.9 or higher

* Clone project `git clone git@github.com:carlesloriente/nocc-bootstrap-theme.git`
* Go into the project folder `cd nocc-bootstrap-theme`
* Init the Bootstrap submodule `git submodule update --init` (only needed the very first time)
* Install Bootstap's documentation pages `npm run install-docs`
* Compile styles and serve documentation `npm start`

Now you should see the Bootstrap documentation pages with NOCC styling applied.
`npm start` incorporates a watcher, so you can write code and see your
changes immediately in the browser.
