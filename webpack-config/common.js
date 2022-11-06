const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: {
        index: './src/index.js'
    },

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
            // favicon: paths.src + '/images/favicon.png',
            // template: paths.src + '/template.html',
            // filename: 'index.html',
        }),
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