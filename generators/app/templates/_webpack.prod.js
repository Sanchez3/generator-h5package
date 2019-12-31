const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: "./",
        filename: 'assets/js/[name].[chunkhash].js',
        chunkFilename: 'assets/js/[name].[chunkhash].js'
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new ParallelUglifyPlugin({
                sourceMap: true,
                uglifyES: {
                    compress: {
                        warnings: false,
                        drop_console: true,
                        booleans: false,
                        collapse_vars: true,
                        reduce_vars: true,
                        loops: true
                    },
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano')({ zindex: false }),
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: false
            })
        ]
    },
    plugins: [
        //清空dist
        new CleanWebpackPlugin({
            verbose: true,
            dry: false
        }),
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
        //Copy Resource
        // new CopyWebpackPlugin([{
        //     from: path.resolve(__dirname, "src/assets/img"),
        //     to: path.resolve(__dirname, "dist/assets/img"),
        //     ignore: ['.*']
        // }, {
        //     from: path.resolve(__dirname, "src/assets/media"),
        //     to: path.resolve(__dirname, "dist/assets/media"),
        //     ignore: ['.*']
        // }]),
        // new MiniCssExtractPlugin({
        //     filename: 'assets/css/[name].[chunkhash].min.css',
        //     chunkFilename: 'assets/css/[name].[chunkhash].css'
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/img/favicon.ico',
            inject: 'body',
            hash: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
});