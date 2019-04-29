const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'build');
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    context: sourcePath,
    entry: path.join(__dirname, 'src') + '/index.tsx',

    output: {
      path: buildPath,
      publicPath: ASSET_PATH,
      filename: "bundle.js",
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.html', '.json', '.css']
    },

    devtool: "source-map",

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.css$/,
                include: sourcePath,
                use: [
                    'style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                        }
                    }
                ]
            },

            {
                test: /\.(png|jpg|gif|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ]
    },

    devServer: {
        index: 'index.html',
        contentBase: buildPath,
        compress: true,
        hot: true,
        port: 8080,
        open: 'chrome' 
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
        new HtmlWebpackPlugin({
            hash: true,
            favicon: 'favicon.ico',
            template: `index.html`
        }),
        new CleanWebpackPlugin({
            path: buildPath
        }),
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/
        ]),
    ]    
};