var gulp        = require('gulp');

var uglify      = require('gulp-uglify');
var ngAnnotate  = require('gulp-ng-annotate');
var minifyCss   = require('gulp-minify-css');
var size        = require('gulp-filesize');

var configs     = require('../config');


gulp.task('prodicution', ['build'], function() {
  return (function() {

    // uglify javascripts
    gulp.src(config.javascripts.dest + '/' + config.jsavascripts.outputName)
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(gulp.dest(config.javascripts.dest))
      .pipe(size());

    // minify css
    gulp.src(config.stylesheets.dest + '/**/*.css')
      .pipe(minifyCss(config._minifyCss.options))
      .pipe(gulp.dest(config.stylesheets.dest))
      .pipe(size());

  })();
});
