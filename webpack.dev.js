const path = require("path")
module.exports = {
    mode: 'development',
    entry: [`./src/index.tsx`, "./src/css/styles.scss"],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/dist/js'),
        filename: "bundle.js",
        publicPath: "/js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,

        watchOptions: {
            ignored: /node_modules/
        },

        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    devtool: "eval"
};

