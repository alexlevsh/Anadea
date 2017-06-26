const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname + '/src/app',

    entry: './app.jsx',

    output: {
        filename: 'bundle.js',
        path: './public'
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'react-hmre'],
                    plugins: ['transform-object-rest-spread', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file?name=[name].[ext]',
            }
        ]
    },

    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },

    devtool: 'eval-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],

    postcss: function() {
        return [autoprefixer({
            browsers: ['last 3 versions', '> 1%']
        })];
    },

    resolve: {
        modulesDirectories: ['node_modules', 'src/assets/scss', 'src/app'],
        extensions: ['', '.js', '.jsx', '.scss']
    }
};