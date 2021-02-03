const {merge} = require('webpack-merge')
const {HotModuleReplacementPlugin} = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const {paths} = require('./application.config.js')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [new HotModuleReplacementPlugin(), new ESLintPlugin()],
    devServer: {
        historyApiFallback: true,
        contentBase: paths.dist,
        open: true,
        compress: true,
        hot: true,
        port: 8081,
    },
})
