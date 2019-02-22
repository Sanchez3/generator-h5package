var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('assets/css/[name]-one.min.css');
var extractSASS = new ExtractTextPlugin('assets/css/[name]-two.min.css');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/assets/js/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].min.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            exclude: /node_modules/,
            include: '/src/'
        }, {
            test: /\.css$/,
            include: /src/,
            use: extractCSS.extract('css-loader')

        }, {
            test: /(\.scss|\.sass)$/,
            use: extractSASS.extract(['css-loader', 'sass-loader'])
        }, {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false
                }
            }
        }, {
            test: /\.(gif|jpg|png|ico)\??.*$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]',
                    publicPath: '../../',
                    outputPath: 'assets/css/'
                }
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: '[name].[ext]',
                publicPath: '../../',
                outputPath: 'assets/media/'
            }
        }, {
            test: /\.(svg|woff|otf|ttf|eot)\??.*$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]',
                    publicPath: '../../',
                    outputPath: 'assets/fonts/'
                }
            }
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "src/assets/img"),
            to: path.resolve(__dirname, "dist/assets/img"),
            ignore: ['.*']
        }, {
            from: path.resolve(__dirname, "src/assets/media"),
            to: path.resolve(__dirname, "dist/assets/media"),
            ignore: ['.*']
        }]),
        extractCSS,
        extractSASS,
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })

    ]
};