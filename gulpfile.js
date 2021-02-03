const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist : ['last 2 version'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'compressed', // nested, compact, compressed
        }))
        .pipe(gulp.dest('css'));
}

function watchFiles() {
    gulp.watch('scss/functions/*.scss', css);
    gulp.watch('scss/pages/*.scss', css);
    gulp.watch('scss/*.scss', css);
    gulp.watch('*.html');
}

// Registrar funciones como tareas
gulp.task( 'css', css );
gulp.task('watch', gulp.parallel(watchFiles));