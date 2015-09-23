var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('*.css', function() {
    gulp.src('*.css').pipe(browserSync.stream());
  });
  gulp.watch('*.js').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});
