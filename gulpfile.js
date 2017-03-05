// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var polymin = require('gulp-polymin2');
var exec = require('child_process').exec;

// Minify Components
gulp.task('minify', function (cb) {
    return gulp.src(['src/*.html', '!src/_*'])
        .pipe(polymin())
        .pipe(rename(function (path) { path.basename += ".min"; }))
        .pipe(gulp.dest('dist'));
});

// Concatenate All Components
gulp.task('create-all', ['minify'], function () {
    return gulp.src(['dist/*.html', '!dist/all.min.html'])
        .pipe(concat('all.min.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('npm-start', function (cb) {
    exec('npm start', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// Default Task
gulp.task('default', ['minify', 'create-all', 'npm-start'], function () {
    function reportChange(event){
        console.log('Event type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path); // The path of the modified file
    }

    gulp.watch('src/*.html', ['minify', 'create-all']).on('change', reportChange);;
});

gulp.task('publish', ['minify', 'create-all'], function () {
    exec('npm publish', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });

    exec('bower publish', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
