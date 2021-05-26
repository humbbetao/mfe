const {merge}  = require('webpack-merge')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const commonConfig = require("./webpack.common")

const devConfig = {
    mode: "production",
    devServer: {
        port:8081,
        historyApiFallback:{
            port: "index.html"
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './plugin/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)