var gulp = require('gulp')
var sass = require('gulp-sass')
var pug = require('gulp-pug')
var clean = require('gulp-clean')
var fs = require('fs')

gulp.task('clean', function() {
  return gulp.src('public', {read: false}).pipe(clean())
})

gulp.task('copy-src', function() {
  return gulp.src('src/**/*.*').pipe(gulp.dest('public/src'))
})
gulp.task('clean-src', function() {
  return gulp.src('public/src', {read: false}).pipe(clean())
})

gulp.task('sass', function() {
  return gulp
    .src('public/src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/src'))
})

gulp.task('pug', function() {
  return gulp
    .src('public/src/**/*.pug')
    .pipe(
      pug({
        pretty: true,
        data: JSON.parse(fs.readFileSync('pug.json'))
      })
    )
    .pipe(gulp.dest('public'))
})

gulp.task(
  'default',
  gulp.series(['clean', 'copy-src', 'sass', 'pug', 'clean-src'])
)
