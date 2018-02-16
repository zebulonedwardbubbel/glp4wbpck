import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import { styles } from './styles';
import webpackDevMiddleware from 'webpack-dev-middleware';
// if HMR is desired
// import webpackHotMiddleware from 'webpack-hot-middleware'
import { config as webpackConfig } from './webpack';
import { paths } from './index';

const browser = browserSync.create();
const bundler = webpack(webpackConfig);

function reload(done) {
    browser.reload();
    done();
}

export function server(done) {
    const config = {
        server: 'src',
        middleware: [
            webpackDevMiddleware(bundler, { /* options */ })
            // if HMR is needed
            // webpackHotMiddleware(bundler)
        ]
    };

    browser.init(config);
    done();
}

// gulp.watch(paths.js.src).on('change', () => browser.reload());
// gulp.watch(paths.styles.src, gulp.series(styles, reload));
const watchStyles = () => gulp.watch(paths.styles.src, gulp.series(styles, reload));

export const watch = gulp.series(styles, watchStyles);