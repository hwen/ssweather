var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

gulp.task('script', function() {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('sass', function() {
	return sass('sass/')
	.on('error', function(err) {
		console.error('Error!', err.message);
	})
	.pipe(gulp.dest('dist/css'));
});

gulp.task('auto', function() {
	gulp.watch('js/*.js', ['script']);
	gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['script', 'sass', 'auto']);