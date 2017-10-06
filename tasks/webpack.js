import path from 'path'
import webpack from 'webpack'
import process from 'process'

const isProduction = (process.env.NODE_ENV === 'production')

let config = {
    entry: './js/main.js',
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    context: path.resolve(__dirname, '../src'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        ]
    },
    plugins: isProduction ? [ new webpack.optimize.UglifyJsPlugin() ] : []
}

// config with HMR
// let config = {
//     entry: {
//         main: [
//             './main.js',
//             'webpack/hot/dev-server',
//             'webpack-hot-middleware/client'
//         ]
//     },
//     output: {
//         filename: './bundle.js',
//         path: path.resolve(__dirname, '../site')
//     },
//     context: path.resolve(__dirname, '../site')
// }

function scripts() {
    return new Promise(resolve => webpack(config, (err, stats) => {
        if (err) console.log('Webpack', err)
            console.log(stats.toString({
                stats: 'normal'
            }))
        resolve()
    }))
}

module.exports = {config, scripts}