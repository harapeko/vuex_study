const mix = require('laravel-mix')
const glob = require('glob') // *を使ったファイル名パターンで利用しています

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix
    .sass(`resources/assets/sass/app.sass`, `public/css/app.css`)
    .js(glob.sync(`resources/assets/vue/**/app.js`), `public/vue/app.js`)
