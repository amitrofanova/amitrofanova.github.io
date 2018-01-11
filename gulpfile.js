var gulp = require('gulp'),
		browserify = require('browserify'),
		babelify = require('babelify'),
		source = require('vinyl-source-stream'),
		less = require('gulp-less');
		autoprefixer = require('gulp-autoprefixer'),
		cssnano = require('gulp-cssnano'),
		rename = require('gulp-rename'),
		pug = require('gulp-pug'),
		browserSync = require('browser-sync'),
		images = require('gulp-image'),
		del = require('del');

gulp.task('styles', function() {
	return gulp.src('app/styles/app.less')
		.pipe(less())
		.pipe(gulp.dest('dist/assets/styles'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('templates', function() {
	return gulp.src(['app/index.html', 'app/index_en.html'])
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
	return browserify('app/scripts/app.js', {debug: true})
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(gulp.dest('dist/assets/scripts'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('fonts', function () {
    gulp.src('app/fonts/fonts/**/*')
    	.pipe(gulp.dest('dist/assets/fonts'))
			.pipe(browserSync.reload({stream: true}))
});

gulp.task('images', function() {
	return gulp.src('app/images/*')
		.pipe(images())
		.pipe(gulp.dest('dist/assets/images'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('copy', function() {
	return gulp.src('app/data/skills.json')
		.pipe(gulp.dest('dist/assets/data'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: ['./', 'dist']
		},
		notify : false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
});


gulp.task('build', ['styles', 'templates', 'scripts', 'images', 'copy'])


gulp.task('default', ['browser-sync', 'styles', 'templates', 'scripts', 'images', 'copy'], function() {
	gulp.watch(['app/styles/app.less'], ['styles']);
	gulp.watch(['app/index.html', 'app/index_en.html'], ['templates']);
	gulp.watch(['app/scripts/app.js'], ['scripts']);
	gulp.watch(['app/images/*'], ['images']);
	gulp.watch(['app/data/skills.json'], ['copy']);
});
