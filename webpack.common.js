const path = require('path')
const {ProvidePlugin} = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {paths, pkg} = require('./application.config.js')

module.exports = {
    entry: {
        main: path.join(paths.src, 'js', 'main.js'),
    },
    output: {
        path: paths.dist,
        filename: 'js/[name].[contenthash].bundle.js',
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: pkg.name,
            template: path.join(paths.src, 'template.html'),
            filename: 'index.html',
        }),
        new ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            useState: ['react', 'useState'],
            useEffect: ['react', 'useEffect'],
            useCallback: ['react', 'useCallback'],
            useContext: ['react', 'useContext'],
            useReducer: ['react', 'useReducer'],
            useRef: ['react', 'useRef'],
            useMemo: ['react', 'useMemo'],
            useImperativeHandler: ['react', 'useImperativeHandler'],
            useLayoutEffect: ['react', 'useLayoutEffect'],
            forwardRef: ['react', 'forwardRef'],
            memo: ['react', 'memo'],
            createContext: ['react', 'createContext'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/i,
                use: ['babel-loader'],
            },
            {
                test: /\.styl$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 2, modules: {auto: true}},
                    },
                    'postcss-loader',
                    'stylus-loader',
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4096,
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.styl'],
        alias: {
            '@root': path.resolve(__dirname, 'src'),
            '@style': path.resolve(__dirname, path.join('src', 'style')),
            '@assets': path.resolve(__dirname, path.join('src', 'assets')),
            '@js': path.resolve(__dirname, path.join('src', 'js')),
        },
    },
    node: {
        __dirname: false,
        __filename: false,
    },
}
