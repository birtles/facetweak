var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var zip = require('gulp-zip');

gulp.task('default', [ 'build:css', 'zip', 'export' ]);

gulp.task('escape-css', function() {
  gulp.src('facetweak.css')
    .pipe(replace(/^(.*)$/gm, '\'$1\' +'))
    .pipe(replace(/^/, 'const STYLE =\n'))
    .pipe(replace(/ \+$/, ';'))
    .pipe(rename('facetweak-css.style.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('build:css', ['escape-css'], function() {
  gulp.src(['build/facetweak-css.style.js', 'facetweak-css.body.js'])
    .pipe(concat('facetweak-css.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('zip', function() {
  gulp.src(['build/facetweak-css.js',
            'facetweak.js',
            'manifest.json'])
    .pipe(zip('extension.zip'))
    .pipe(gulp.dest('dist'));
});

/* This is needed because WebIDE on Window fails to install the app if we point
 * it at a folder which has a node_modules subdirectory since some of the
 * paths exceed length limitations. */
gulp.task('export', function() {
  gulp.src(['manifest.json', 'update.webapp', 'img/icons/**'], { base: '.' })
    .pipe(gulp.dest('dist'));
});
