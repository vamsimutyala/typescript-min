var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync').create();

gulp.task('build.dev',function(){
    runSequence('clean:build','compile:ts','browserSync','watch');
})



/**
 * Sub tasks
 */

gulp.task('clean:build',function(){
    return del.sync('build');
});

gulp.task('compile:ts',function(){
    return gulp.src('src/**/*.ts').pipe(ts({
        noImplicitAny: true
    })).pipe(gulp.dest('build'));
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});
gulp.task('watch', function(){
  gulp.watch('src/**/*.ts', ['compile:ts']);
  gulp.watch('build/**/*.js', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload); 
   
})