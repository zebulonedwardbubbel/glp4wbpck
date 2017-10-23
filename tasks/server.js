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

function reload() {
    browser.reload();
}

export function server() {
    const config = {
        server: 'src',
        middleware: [
            webpackDevMiddleware(bundler, { /* options */ })
            // if HMR is needed
            // webpackHotMiddleware(bundler)
        ]
    };

    browser.init(config);

    gulp.watch(paths.js.src).on('change', () => browser.reload());
    gulp.watch(paths.styles.src, gulp.series(styles, reload));
}
