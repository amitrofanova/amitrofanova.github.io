const { src, dest, watch, parallel, series } = require("gulp");
const sync = require("browser-sync").create();

const less = require('gulp-less');
const babelify = require('babelify');
const browserify = require('browserify');
const images = require('gulp-image');
const del = require('del');
const fs = require("fs");

function styles(cb) {
	src('app/styles/app.less')
		.pipe(less())
		.pipe(dest('dist/assets/styles'))
		.pipe(sync.stream());

	cb();
}

function templates(cb) {
	src(['app/index.html', 'app/index_en.html'])
		.pipe(dest('dist'))
		.pipe(sync.stream());

	cb();
}

function scripts(cb) {
	// `fs.createWriteStream` is not able to create the folder itself
	fs.mkdirSync('dist/assets/scripts/', { recursive: true });

	browserify('app/scripts/app.js', {debug: true})
		.transform(babelify, {presets: ["@babel/preset-env"]})
		.bundle()
		//.pipe(src('scripts.js'))
		.pipe(fs.createWriteStream('dist/assets/scripts/scripts.js'));

	cb();
}

function fonts(cb) {
	src('app/fonts/fonts/**/*')
		.pipe(dest('dist/assets/fonts'))
		.pipe(sync.stream());

	cb();
}

function imagesTask(cb) {
	src('app/images/*')
		.pipe(images())
		.pipe(dest('dist/assets/images'))
		.pipe(sync.stream());

	cb();
}

function copy(cb) {
	src('app/data/skills.json')
		.pipe(dest('dist/assets/data'))
		.pipe(sync.stream());

	cb();
}

function browserSync(cb) {
	sync.init({
		server: {
			baseDir: ['./', 'dist']
		}
	});

	watch(['app/styles/app.less'], styles);
	watch(['app/index.html', 'app/index_en.html'], templates);
	watch("./dist/**.html").on('change', sync.reload);
}

function clean(cb) {
	return del.sync('dist');
}

function watchFiles(cb) {
	watch(['app/styles/app.less'], styles);
	watch(['app/index.html', 'app/index_en.html'], templates);
	watch(['app/scripts/app.js'], scripts);
	watch(['app/images/*'], imagesTask);
	watch(['app/data/skills.json'], copy);
}

exports.styles = styles;
exports.templates = templates;
exports.scripts = scripts;
exports.fonts = fonts;
exports.images = imagesTask;
exports.copy = copy;
exports.browserSync = browserSync;
exports.clean = clean;
exports.watch = watchFiles;
exports.sync = sync;
exports.default = series(styles, templates, scripts, fonts, imagesTask, copy);
