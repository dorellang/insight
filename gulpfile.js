// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint  = require('gulp-jshint');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-cssmin');
var sass    = require('gulp-sass');
var jsdoc   = require("gulp-jsdoc-to-markdown");
var notify  = require('gulp-notify');
var connect = require('gulp-connect');

var sources = ['src/niclabs/**/*.js','src/thirdParty/*.js'];

var mimetype = {
    '.css':    'text/css',
    '.js':     'text/javascript',
    '.txt':    'text/plain',
    '.html':   'text/html'
};

// Web server
gulp.task('serve', function () {
    var fs = require('fs');
    var path = require('path');

    connect.server({
        port: 8000,
        livereload: true,
        middleware: function(app, opt) {
            return [function(request, response, next) {
                var basename = path.basename(request.url);
                var ext  = path.extname(basename);

                // Check if /dist/basename exists otherwise return the file
                fs.readFile(path.join('dist', basename), function(err, data) {
                    if (err) {
                        return next();
                    }

                    if (ext in mimetype) {
                        response.setHeader('Content-Type', mimetype[ext]);
                    }

                    response.end(data);
                });
            }];
        }
    });
});

// Lint Task
gulp.task('lint', function () {
    return gulp.src(sources)
        .pipe(jshint())
        // Use gulp-notify as jshint reporter
        .pipe(notify(function (file) {
            if (file.jshint.success) {
                // Don't show something if success
                return false;
            }

            var errors = file.jshint.results.map(function (data) {
                if (data.error) {
                    return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
                }
            }).join("\n");
            return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
        }));
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
    gulp.src('dist/insight.css')
        .pipe(cssmin())
        .pipe(rename('insight.min.css'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
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
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(sources, ['scripts', 'docs']);
    gulp.watch('scss/**/*.scss', ['css']);
});

// Default Task
gulp.task('default', ['css', 'scripts', 'docs', 'serve', 'watch']);
