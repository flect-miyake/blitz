var gulp   = require('gulp');

var handleErrors       = require('../util/handleErrors');

var sass               = require('gulp-sass');
var sourcemaps         = require('gulp-sourcemaps');
var autoprefixer       = require('gulp-autoprefixer');

var config = require('../config').lds;

var sassConfig         = require('../config')._sass;
var autoprefixerConfig = require('../config')._autoprefixer;


gulp.task('lds', function() {
  // copy assets
  gulp.src(config.assets.src)
    .pipe(gulp.dest(config.assets.dest));

  gulp.src(config.scss.src)
    .pipe(sass(sassConfig.options))
    .on('error', handleErrors)
    .pipe(autoprefixer(autoprefixerConfig.options))
    .pipe(gulp.dest(config.scss.dest));
});
