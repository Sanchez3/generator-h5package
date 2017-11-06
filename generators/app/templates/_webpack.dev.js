var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000,
        disableHostCheck: true,
        host: '0.0.0.0',
    },
    plugins: []
});