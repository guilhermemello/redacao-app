var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var replace = require('gulp-replace-task');
var args = require('yargs').argv;
var fs = require('fs');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('replace', function () {
  var env = args.env || 'development';
  var filename = env + '.json';
  var settings = JSON.parse(fs.readFileSync('./config/' + filename, 'utf8'));

  gulp.src('config/config.module.js')
    .pipe(replace({
      patterns: [
        {
          match: 'API_ENDPOINT',
          replacement: settings.API_ENDPOINT
        },
        {
          match: 'CUSTOMER_ENDPOINT',
          replacement: settings.CUSTOMER_ENDPOINT
        },
        {
          match: 'AUTH_CLIENT_ID',
          replacement: settings.AUTH_CLIENT_ID
        },
        {
          match: 'AUTH_SECRET',
          replacement: settings.AUTH_SECRET
        },
        {
          match: 'AUTH_EXPIRES_IN',
          replacement: settings.AUTH_EXPIRES_IN
        },
        {
          match: 'VIMEO_URL',
          replacement: settings.VIMEO_URL
        },
        {
          match: 'VIMEO_ACCES_TOKEN',
          replacement: settings.VIMEO_ACCES_TOKEN
        }
      ]
    }))
    .pipe(gulp.dest('www/js/config'));
});
