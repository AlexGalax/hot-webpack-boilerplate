const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require("dotenv");
dotenv.config();

module.exports = {

    entry:[
        path.resolve(__dirname, '../src/index.js')
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        clean: true,
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/");
            return `${filepath}/[name].[hash][ext][query]`;
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Boilerplate Webpack Project',
            template: './src/index.html',
            // favicon: './src/assets/favicon.jpg',
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/i,
                use: ['babel-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
        ]
    }


}