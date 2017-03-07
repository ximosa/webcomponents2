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


// Task to publish
gulp.task('publish', ['prepare-publish', 'git-push-commit']);

gulp.task('prepare-publish', ['minify', 'create-all'], function (cb) {
    return gulp.src('bower.json')
        .pipe(jeditor(function (json) {
            var nums = json.version.split('.').map(n => +n);
            nums[nums.length - 1]++;
            json.version = nums.join('.');
            return json;
        }))
        .pipe(gulp.dest('./'));
});


gulp.task('git-push-commit', ['prepare-publish'], function (cb) {
    gulp.src('bower.json')
        .pipe(jeditor(function (json) {
            exec(`git add --all && git commit -am "updating bower version" && git tag -a v${json.version} -m "Release version ${json.version}" && git push origin master --tag`, function (err, stdout, stderr) {
                console.log(stdout);
                console.log(stderr);
                cb(err);
            });
            return json;
        }));
});