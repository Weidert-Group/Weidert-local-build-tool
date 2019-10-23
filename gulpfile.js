/**
 * Settings
 * Turn on/off build features
 */

var settings = {
	clean: true,
	scripts: true,
	polyfills: true,
	styles: true,
	reload: true
};

/**
 * Paths to project folders
 */

var paths = {
	input: 'src/',
	output: 'minified/',
	scripts: {
		input: 'src/js/*',
		polyfills: '.polyfill.js',
		output: 'minified/js/'
	},
	styles: {
		input: 'src/css/**/*.css',
		output: 'minified/css/'
	},
	reload: './minified/'
};

/**
 * Template for banner to add to file headers
 */

var banner = {
	full:
		'/*!\n' +
		' * <%= package.name %> v<%= package.version %>\n' +
		' * <%= package.description %>\n' +
		' * (c) ' + new Date().getFullYear() + ' <%= package.author.name %>\n' +
		' * <%= package.license %> License\n' +
		' * <%= package.repository.url %>\n' +
		' */\n\n',
	min:
		'/*!' +
		' <%= package.name %> v<%= package.version %>' +
		' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
		' | <%= package.license %> License' +
		' | <%= package.repository.url %>' +
		' */\n'
};

/**
 * Gulp Packages
 */

// General
var {gulp, src, dest, watch, series, parallel} = require('gulp');
var del = require('del');
var flatmap = require('gulp-flatmap');
var lazypipe = require('lazypipe');
var rename = require('gulp-rename');
var header = require('gulp-header');
var package = require('./package.json');

// Scripts
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-terser');
var optimizejs = require('gulp-optimize-js');

// Styles
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var prefix = require('autoprefixer');
var minify = require('cssnano');
var uglifycss = require('gulp-uglifycss');

/**
 * Gulp Tasks
 */

// Remove pre-existing content from output folders
var cleanDist = function (done) {

	// Make sure this feature is activated before running
	if (!settings.clean) return done();

	// Clean the minified folder
	del.sync([
		paths.output
	]);

	// Signal completion
	return done();

};

// Repeated JavaScript tasks
var jsTasks = lazypipe()
	.pipe(optimizejs)
	.pipe(dest, paths.scripts.output)
	.pipe(rename, {suffix: '.min'})
	.pipe(uglify)
	.pipe(optimizejs)
	.pipe(dest, paths.scripts.output);

// Lint, minify, and concatenate scripts
var buildScripts = function (done) {

	// Make sure this feature is activated before running
	if (!settings.scripts) return done();

	// Run tasks on script files
	return src(paths.scripts.input)
		.pipe(flatmap(function(stream, file) {

			// If the file is a directory
			if (file.isDirectory()) {

				// Setup a suffix variable
				var suffix = '';

				// If separate polyfill files enabled
				if (settings.polyfills) {

					// Update the suffix
					suffix = '.polyfills';

					// Grab files that aren't polyfills, concatenate them, and process them
					src([file.path + '/*.js', '!' + file.path + '/*' + paths.scripts.polyfills])
						.pipe(concat(file.relative + '.js'))
						.pipe(jsTasks());

				}

				// Grab all files and concatenate them
				// If separate polyfills enabled, this will have .polyfills in the filename
				src(file.path + '/*.js')
					.pipe(concat(file.relative + suffix + '.js'))
					.pipe(jsTasks());

				return stream;

			}

			// Otherwise, process the file
			return stream.pipe(jsTasks());

		}));

};

// Lint scripts
var lintScripts = function (done) {

	// Make sure this feature is activated before running
	if (!settings.scripts) return done();

	// Lint scripts
	return src(paths.scripts.input)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));

};

var productionScripts = function (done) {

	return src('minified/js/*.min.js')
	  .pipe(concat('./main.min.js'))
	  .pipe(dest('./minified/'));

};

// Process, lint, and minify Sass files
var buildStyles = function (done) {

	// Make sure this feature is activated before running
	if (!settings.styles) return done();

	// Run tasks on all Sass files
	return src(paths.styles.input)
		  .pipe(uglifycss({
		  }))
		  .pipe(dest(paths.styles.output));

};

/**
 * Export Tasks
 */

// Default task
// gulp
exports.default = series(
	cleanDist,
	parallel(
		buildScripts,
		lintScripts,
		buildStyles
	)
);

exports.prodRdy = series(
	parallel(
		productionScripts
	)
);