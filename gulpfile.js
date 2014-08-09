var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    size = require('gulp-size'),
    pkg = require('./package.json');

var paths = {
  styles: './recipeminder/static/css/app.scss',
  scripts: ['./recipeminder/static/js/jquery-2.1.0.min.js', './app/webroot/admin-assets/js/main.js']
};

gulp.task('styles', function () {
  gulp.src(paths.styles)
    .pipe(sass({ style: 'expanded' })) // Add source maps after figuring out minify issue
    .pipe(gulp.dest('./recipeminder/static/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifyCSS())
    .pipe(size())
    .pipe(gulp.dest('./recipeminder/static/css/'));
});

gulp.task('lint', function () {
  return gulp.src('./recipeminder/static/js/main.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', ['lint'], function() {
  gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./recipeminder/static/js/'))
    .pipe(rename('app.min.js'))
    .pipe(uglify({ preserveComments: 'some' }))
    .pipe(size())
    .pipe(gulp.dest('./recipeminder/static/js/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('./recipeminder/static/js/*.js', ['scripts']);
  gulp.watch('./recipeminder/static/css/*.scss', ['styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['styles', 'scripts']);
