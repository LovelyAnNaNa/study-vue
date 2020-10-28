const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = webpackMerge(baseConfig,{
    //实时刷新代码
    devServer:{
        contentBase: "./dist",
        inline: true
    }
})
