var webpack = require("webpack");

module.exports = {

    entry: {
        "app": "./app/main",
        "dependencies": "./app/dependencies"
    },
    output: {
        path: __dirname,
        filename: "./scripts/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts/,
                loaders: ['ts-loader'],
                excluded: /node_modules/
            }
        ]
    }
}