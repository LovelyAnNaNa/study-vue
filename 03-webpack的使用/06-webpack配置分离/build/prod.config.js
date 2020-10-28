const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

//从node里面导入path包
const webpack = require("webpack")
//打包index.html
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = webpackMerge(baseConfig,{
    //webpack插件
    plugins: [
        new webpack.BannerPlugin("最终版权归AAA所有"),
        //压缩js
        new uglifyJsPlugin()
    ],
})