'use strict';
 
const 
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel');


// SCSS

sass.compiler = require('node-sass');

gulp.task('sass', function () {

    const plugins = [
        require('autoprefixer')({
            browsers: ['last 2 versions'],
            cascade: false
        }),
        require("css-mqpacker")({sort: true})
    ];

    return gulp.src('./src/css/*.scss')
        .pipe( sass({outputStyle: 'expanded'}).on('error', sass.logError) )
        .pipe(postcss(plugins))
        .pipe( gulp.dest('./dist/css') );
});

// gulp.task('scripts', function () {
//     return gulp.src('./src/js/script.js')
//         // .pipe( babel() )
//         .pipe(babel({
//             "presets": ["es2015"]
//         }))
//         .pipe( gulp.dest('./dist/js') );
// });



gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(babel())
        .pipe( gulp.dest('./dist/js') );
    });


// Watch/Default Tasks
gulp.task('watch', function () {
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./src/css/**/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'sass', 'scripts']);