var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('script', function() {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function() {
	return sass('sass/*.scss')
	.on('error', function(err) {
		console.error('sassError!', err.message);
	})
	.pipe(gulp.dest('dist/css'));
});

gulp.task('auto', function() {
	gulp.watch('js/*.js', ['script']);
	gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'script', 'auto']);