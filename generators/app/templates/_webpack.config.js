'use strict';

var path = require('path');
var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('assets/css/[name]-one.css');
var extractSASS = new ExtractTextPlugin('assets/css/[name]-two.css');

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, "src/assets/js/main.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].js',
        publicPath: 'localhost:8888/dist'
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
            use: extractCSS.extract(['css-loader'])
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


    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //本地服务器所加载的页面所在的目录
        port: 8888,
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        publicPath: '/'
    },
    plugins: [
        //清空dist
        new CleanWebpackPlugin(["dist"], {
            root: '',
            verbose: true,
            dry: false
        }),
        extractCSS,
        extractSASS,
        new HtmlWebpackPlugin({
            title: 'Custom template',
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