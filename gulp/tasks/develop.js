var gulp        = require('gulp');

var browserSync = require('browser-sync');

var config      = require('../config')._browserSync;


gulp.task('develop', ['watch'], function() {
  browserSync(config.options);

  gulp.watch([config.target], function() {
    browserSync.reload();
  });
});
