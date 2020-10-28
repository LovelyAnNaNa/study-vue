//从node里面导入path包
const path = require('path')

//局部安装webpack(开发时依赖)  npm install webpack@3.6.0 --save -dev
module.exports = {
    entry: "./src/main.js",
    output: {
        //打包的路径,绝对路径 __dirname是node全局变量,文件路径
        path: path.resolve(__dirname ,"dist"),
        filename: "bundle.js"
    }
}