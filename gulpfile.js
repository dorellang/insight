// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('css', function () {
    gulp.src('style/**/*.css')
        .pipe(cssmin())
        .pipe(rename('CityDashboard.min.css'))
        .pipe(gulp.dest('dist'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('CityDashboard.js'))
        .pipe(gulp.dest('tmp'))
        .pipe(rename('CityDashboard.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['lint', 'scripts']);
});

// Default Task
gulp.task('default', ['lint', 'css', 'scripts', 'watch']);
