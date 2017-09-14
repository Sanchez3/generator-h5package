'use strict';

var path = require('path');
var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('assets/css/[name]-one.min.css');
var extractSASS = new ExtractTextPlugin('assets/css/[name]-two.min.css');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/assets/js/main.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].min.js',
        // publicPath: 'localhost:8888/dist'
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                }
            },
            exclude: /node_modules/,
            include: '/src/'
        }, {
            test: /\.css$/,
            include: /src/,
            use: extractCSS.extract('css-loader'),

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
        }]

    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //本地服务器所加载的页面所在的目录
        port: 9000,
        disableHostCheck: true,
        host: '0.0.0.0',
    },
    plugins: [
        //清空dist
        new CleanWebpackPlugin(["dist"], {
            root: '',
            verbose: true,
            dry: false
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "src/assets/img"),
            to: path.resolve(__dirname, "dist/assets/img")

        }, {
            from: path.resolve(__dirname, "src/assets/media"),
            to: path.resolve(__dirname, "dist/assets/media"),
        }]),
        extractCSS,
        extractSASS,
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }, { copyUnmodified: true }),
        new HtmlWebpackPlugin({
            chunks: ["main"],
            template: './src/index.html',
            inject: 'body',
            hash: true,
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        })

    ]
};