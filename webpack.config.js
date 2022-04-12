const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: './app/assets/js/index.js',
        card: './app/assets/js/card.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader", 
                        options: {
                            url: false
                        }
                    },
                    "sass-loader",
                ],
            },
        ]
    },
    devServer: {
        static: './dist',
        hot: true,
        liveReload: true,
        watchFiles: {
            paths: ['app/scenes/*.html'],
            options: {
              usePolling: false,
            },
          },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'app/scenes/index.html',
            chunks: ['index'],
            inject: false, 
        }),
        new HtmlWebpackPlugin({
            filename:'card.html',
            template: 'app/scenes/card.html',
            chunks: ['index','card'],
            inject: false, 
        }),
        new CopyPlugin({
            patterns: [
                { from: "app/assets/images/*.svg",    to: 'images/[name].svg' },
                { from: "app/assets/fonts/*",    to: 'fonts/[name][ext]' },
            ],
          }),
    ],
};