const path = require('path')

module.exports = {
    devtool: "source-map",
    entry: "./public/src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'public'),
    },
};