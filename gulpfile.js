// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var sass   = require('gulp-sass');
var jsdoc  = require("gulp-jsdoc-to-markdown");
var notify = require('gulp-notify');

var sources = 'src/niclabs/**/*.js';

// Lint Task
gulp.task('lint', function () {
    return gulp.src(sources)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('sass', function () {
    gulp.src('scss/style.scss')
        .pipe(sass())
        .on("error", notify.onError(function (error) {
            return error.message;

        }))
        .pipe(gulp.dest('tmp'))
        .pipe(concat('insight.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', ['sass'], function () {
    gulp.src('dist/*.css')
        .pipe(cssmin())
        .pipe(rename('insight.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task("docs", function () {
    return gulp.src(sources)
        .pipe(concat("DOCS.md"))
        .pipe(jsdoc())
        .on("error", notify.onError(function (error) {
            return error.message;

        }))
        .pipe(gulp.dest('.'));
});

// Concatenate & Minify JS
gulp.task('scripts', ['lint'], function () {
    return gulp.src(sources)
        .pipe(concat('insight.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('insight.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(sources, ['scripts', 'docs']);
    gulp.watch('scss/**/*.scss', ['css']);
});

// Default Task
gulp.task('default', ['css', 'scripts', 'docs', 'watch']);
