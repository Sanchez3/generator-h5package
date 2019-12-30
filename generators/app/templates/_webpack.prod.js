const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: './'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        disableHostCheck: true,
        host: '0.0.0.0',
    },
    optimization: {
        minimizer: [
            new ParallelUglifyPlugin({
                sourceMap: true,
                uglifyJS: {
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
                assetNameRegExp: /\.css$/,
                cssProcessor: require('cssnano')({ zindex: false }),
                cssProcessorOptions: {
                    discardComments: { removeAll: true }
                },
                canPrint: false
            }, {
                copyUnmodified: true
            })
        ]
    },
    plugins: [
        //清空dist
        new HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(["dist"], {
            root: '',
            verbose: true,
            dry: false
        }),
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