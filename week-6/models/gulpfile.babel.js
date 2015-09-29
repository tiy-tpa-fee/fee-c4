import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('html', () => {
  return gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('script', () => {
  return gulp.src('src/main.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['html', 'script']);

gulp.task('default', ['build']);
