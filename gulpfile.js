const gulp = require('gulp');
const server = require('browser-sync');
const sass = require('gulp-sass')(require ('sass'));
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

gulp.task('server', function(){
    server.init({
        server: {
            baseDir: 'src'
        }
    });
});

gulp.task('styles', function(){
    return gulp.src('src/sass/**/*.+(sass|scss)')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['./node_modules']
        }).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(server.stream());
});

gulp.task('watch', function(){
    gulp.watch("src/*.html").on("change", server.reload);
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
});

gulp.task('default', gulp.parallel('server', 'styles','watch'));