const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/assets/js/main.js")
    },
    // resolve: {
    //     alias: {
    //         pixi: path.resolve(__dirname, 'node_modules/phaser-ce/build/custom/pixi.min.js'),
    //         phaser: path.resolve(__dirname, 'node_modules/phaser-ce/build/custom/phaser-split.min.js'),
    //         p2: path.resolve(__dirname, 'node_modules/phaser-ce/build/custom/p2.js')
    //     }
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: 'assets/js/[name].[chunkhash].js',
        chunkFilename: 'assets/js/[name].[chunkhash].js'
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules\/(.*)\.js/,
                    name: 'vendor',
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            //exposing pixi, correct phaser and p2 into global scope (begin)
            // {
            //     test: /pixi\.min.js/,
            //     loader: "expose-loader?PIXI"
            // }, {
            //     test: /phaser-split\.min.js/,
            //     loader: "expose-loader?Phaser"
            // }, {
            //     test: /p2\.js/,
            //     loader: "expose-loader?p2"
            // }, 
            {
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
                test: /(\.css|\.scss|\.sass)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        }
                    },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                    {
                        loader: 'postcss-loader',
                        options: { plugins: () => [require('autoprefixer')({ 'browsers': ['> 1%', 'last 2 versions'] })] }
                    }
                ]
            }, {
                test: /\.(gif|jpg|png|ico)\??.*$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/img/[name].[ext]'
                    }
                }
            }, {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/media/[name].[ext]'
                    }
                }
            }, {
                test: /\.(svg|woff|otf|ttf|eot)\??.*$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/fonts/[name].[ext]'
                    }
                }
            }, {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: false,
                        collapseWhitespace: false,
                        interpolate: 'require'
                    }
                }
            }
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
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[chunkhash].min.css',
            chunkFilename: 'assets/css/[name].[chunkhash].css'
        }),
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
};