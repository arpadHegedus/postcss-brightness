# PostCSS Brightness [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">](https://github.com/postcss/postcss)
[![NPM Version](https://img.shields.io/npm/v/postcss-brightness.svg)](https://www.npmjs.com/package/postcss-brightness)
[![Build Status](https://travis-ci.org/arpadHegedus/postcss-brightness.svg?branch=master)](https://travis-ci.org/arpadHegedus/postcss-brightness)
[![BGitter Chat](https://img.shields.io/badge/chat-gitter-blue.svg)](https://gitter.im/postcss/postcss)

A [PostCSS](https://github.com/postcss/postcss) to adjust or change the brightness of a color


## Installation

```
npm install postcss-brightness
```

## Examples

### Simple use, setting brightness percentage
```css
/* input */
div { color: brightness(#34bbed, 80) }
```
```css
/* output */
div { color: #a1dff7 }
```

### Adjusting brightness
```css
/* input */
div { color: brightness(#34bbed, +10) }
div.other { color: brightness(#34bbed, -10) }
```
```css
/* output */
div { color: #63caf1 }
div.other { color: #13a4db }
```

## Usage

### [Postcss JS API](https://github.com/postcss/postcss#js-api)

```js
postcss([require('postcss-brightness')]).process(yourCSS);
```

### [Gulp](https://github.com/gulpjs/gulp)

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const brightness = require('postcss-brightness');
gulp.task('css', () => {
    gulp.src('path/to/dev/css')
        .pipe(postcss([
            brightness()
        ]))
        .pipe(gulp.dest('path/to/build/css'));
});
```

## Tests

```
npm test
```

## License
This project is licensed under the [MIT License](./LICENSE).
