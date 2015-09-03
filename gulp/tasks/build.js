var gulp        = require('gulp');

var runSequence = require('run-sequence');


gulp.task('build', function(callback) {
  runSequence(
    'clean',
    ['htdocs', 'javascripts', 'templates', 'config:develop', 'stylesheets', 'images', 'fonts', 'bower', 'lds'],
    callback
  );
});
