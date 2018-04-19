import gulp from 'gulp';
import browserSync from 'browser-sync';
import nunjucks from 'gulp-nunjucks-render';
import { paths } from './index';

const isProduction = (process.env.NODE_ENV === 'production');

function templating() {
    return gulp.src(paths.templates.src)
        .pipe(nunjucks({
            path: 'src/templates/'
        }))
        .pipe(gulp.dest(isProduction ? paths.templates.dist : paths.templates.dev))
}

module.exports = {
    templating
};
