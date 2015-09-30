import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber'

const sync = browserSync.create();

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('script', () => {
  return browserify({
    entries: ['./src/main.js'],
    extension: ['.js'],
    debug: true
  }).transform(babelify).bundle()
    .pipe(plumber())
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('build', ['html', 'script']);

gulp.task('serve', ['build'], function() {
  sync.init({
    server: 'dist',
  });

  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.js', ['script'])
});

gulp.task('default', ['serve']);
