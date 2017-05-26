var webpack = require('webpack');

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = function(env) {

    return {
        name: 'client',
        entry: {
            polyfills: path.resolve(__dirname, 'polyfills.ts'),
            vendor: path.resolve(__dirname, 'vendor.ts'),
            main: path.resolve(__dirname, 'main.ts')
        },
        output: {
            filename: 'app-[name].js',
            path: path.resolve(__dirname, '../dist')
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: ['.css', '.ts', '.js'], // note if using webpack 1 you'd also need a '' in the array as well
            modules: [path.resolve(__dirname, "client"), "node_modules"]
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: ['ts-loader', 'angular2-template-loader'],
                exclude: /node_modules/,
            }, {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })

            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            }, { // image loader
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?name=./images/[name].[ext]'
                ]
            }, { // font loader
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=./fonts/[name].[ext]'
                ]
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }]
        },
        plugins: [
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)client|client)(\\|\/)linker/,
                __dirname, // location of your src
                {} // a map of your routes
            ),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['main', 'vendor', 'polyfills']
            }),
            new ExtractTextPlugin("style.[name].css"),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'index.html')
            }),

        ]
    };
};