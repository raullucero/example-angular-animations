var gulp      = require('gulp');
var gutil     = require('gulp-util');
var bower     = require('bower');
var concat    = require('gulp-concat');
var sass      = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename    = require('gulp-rename');
var sh        = require('shelljs');
var shell     = require('gulp-shell');

var paths = {
  sass: ['./css/styles.scss']
};

gulp.task('default', ['watchSass']);

gulp.task('sass', function(done) {
  gulp.src('./css/styles.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});

gulp.task('watchSass', function() {
  gulp.watch(paths.sass, ['sass']);
});
