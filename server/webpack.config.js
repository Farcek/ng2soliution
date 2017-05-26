var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');
var ReloadServerPlugin = require('reload-server-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = function(env) {
    console.log('__dirname', __dirname);
    return {
        entry: path.resolve(__dirname, 'main.ts'),
        context: __dirname,
        node: {
            __filename: false,
            __dirname: false
        },
        output: {
            filename: 'server-[name].js',
            path: path.resolve(__dirname, '../dist')
        },
        resolve: {
            extensions: ['.ts', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }]
        },
        target: 'node',
        externals: [nodeExternals()],
        plugins: [
            new ReloadServerPlugin({
                script: 'dist/server-main.js'
            }),
            // new BrowserSyncPlugin({
            //     // browse to http://localhost:3000/ during development, 
            //     // ./public directory is being served 
            //     host: 'localhost',
            //     port: 3300
            // })
        ]
    };
};