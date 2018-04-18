import gulp from 'gulp';
import { scripts } from './webpack';
import { watch } from './server';
import { server } from './server';
import { styles, stylesBuild } from './styles';
import { images } from './images';
import del from 'del';
import changed from 'gulp-changed';

export const paths = {
    html: {
        src: 'src/**/*.html',
        dist: 'dist/'
    },
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
    },
    fonts: {
        src: 'src/fonts/**/*.{woff,woff2}',
        dist: 'dist/fonts'
    }
};

export const clean = () => del(['dist']);

function copyFonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dist));
};

function copyHTML() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dist));
};

export const dev = gulp.series(server, watch);

export const build = gulp.series(clean, gulp.parallel(stylesBuild, scripts, images, copyFonts, copyHTML));

export default dev;
