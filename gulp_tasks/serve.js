var gulp = require('gulp');

gulp.task('serve', ['styles'], function() {
    gulp.watch('./app/src/stylesheets/**/*.styl', ['styles']);
});