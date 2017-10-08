import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync'
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import sourcemaps from 'gulp-sourcemaps';

const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dist: 'dist/styles/'
    }
}

export function styles() {
    const postcssPlugins = [
        autoprefixer({
            browsers: ['last 2 version']
        }),
        cssnano()
    ];
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(postcssPlugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dist))
        .pipe(browserSync.stream()) 
}