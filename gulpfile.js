var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');

var dependencies = ['react', 'react/addons'];
var server = {
	host: 'localhost',
	port: '1337'
}

gulp.task('eslint', function () {
    return gulp.src(['./app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('bundle-css', function() {
	gulp.src('./app/**/*.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('dist'));
});

gulp.task('bundle-js', function() {
    return browserify({
        extensions: ['.js', '.jsx'],
        entries: 'app/app.js',
    })
    .transform(babelify.configure({
		stage: 0,
        ignore: /(bower_components)|(node_modules)/
    }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('watch', function() {
	gulp.watch('./app/**/*.js', ['eslint', 'bundle-js']);
	gulp.watch('./app/**/*.scss', ['bundle-css']);
});

gulp.task('default', ['eslint', 'bundle-js', 'bundle-css', 'webserver', 'watch']);
