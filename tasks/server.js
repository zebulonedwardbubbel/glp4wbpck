import gulp from 'gulp'
import browserSync from 'browser-sync'
import webpack from 'webpack'
import styles from './styles'
import webpackDevMiddleware from 'webpack-dev-middleware'
// if HMR is needed
// import webpackHotMiddleware from 'webpack-hot-middleware'

import { config as webpackConfig } from './webpack'

const browser = browserSync.create()
const bundler = webpack(webpackConfig)

export function server() {

    let config = {
        server: 'src',
        middleware: [
            webpackDevMiddleware(bundler, { /* options */ }),
            // if HMR is needed
            // webpackHotMiddleware(bundler)
        ],
    }

    browser.init(config)

    gulp.watch('src/**/*.js').on('change', () => browser.reload())
    gulp.watch('src/**/*.scss').on('change', () => styles)
}