// Include gulp
var gulp = require('gulp');

// Include Our Plugins
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const polymin = require('gulp-polymin2');
const replace = require('gulp-replace');
const jeditor = require('gulp-json-editor');
const exec = require('child_process').exec;

// Minify Components
gulp.task('minify', function (cb) {
    return gulp.src(['src/*.html', '!src/_*'])
        .pipe(polymin())
        .pipe(rename(function (path) { path.basename += ".min"; }))
        .pipe(replace(/bower_components\//g, '../'))
        .pipe(gulp.dest('dist'));
});

// Concatenate All Components
gulp.task('create-all', ['minify'], function () {
    return gulp.src(['dist/*.html', '!dist/all.min.html'])
        .pipe(concat('all.min.html'))
        .pipe(gulp.dest('dist'));
});


// Default Task
gulp.task('test', function (cb) {
    exec('git status', function (err, stdout, stderr) {
        console.log(stdout);
        //console.log(stderr);
        cb(err);
    });
});

gulp.task('publish', ['minify', 'create-all'], function (cb) {
    gulp.src('bower.json')
        .pipe(jeditor(function(json) {
            var nums = json.version.split('.').map(n => +n);
            nums[nums.length - 1]++;
            json.version = nums.join('.');
            console.log(json.version);
            return json;
        }))
        .pipe(gulp.dest('./'))

    exec('bower register webcompoennst2 https://github.com/michael-silva/webcomponents2.git', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});