const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('public/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/styles'));
});

gulp.task('watch', function () {
    gulp.watch('public/styles/**/*.scss', gulp.series('sass'));
});
