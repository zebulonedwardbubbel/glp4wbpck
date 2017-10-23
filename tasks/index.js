import gulp from 'gulp';
import { scripts } from './webpack';
import { server } from './server';
import { styles, stylesBuild } from './styles';
import { images } from './images';
import del from 'del';

export const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dev: 'src/styles/',
        dist: 'dist/styles/'
    },
    js: {
        src: 'src/**/*.js'
    },
    img: {
        src: 'src/img/**/*.{gif,png,jpg}',
        dist: 'dist/img/'
    }
};

export const clean = () => del(['dist']);

export const dev = gulp.series(styles, server);

export const build = gulp.series(clean, gulp.parallel(stylesBuild, scripts, images));

export default dev;
