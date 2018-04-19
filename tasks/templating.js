import gulp from 'gulp';
import browserSync from 'browser-sync';
import nunjucks from 'gulp-nunjucks-render';
import { paths } from './index';

function templating() {
    return gulp.src(paths.templates.src)
        .pipe(nunjucks({
            path: 'src/templates/'
        }))
        .pipe(gulp.dest(paths.templates.dist))
        // .pipe(browserSync.stream());
}

module.exports = {
    templating
};
