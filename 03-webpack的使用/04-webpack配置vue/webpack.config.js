//从node里面导入path包
const path = require('path')

//局部安装webpack(开发时依赖)  npm install webpack@3.6.0 --save -dev
module.exports = {
    entry: "./src/main.js",
    output: {
        //打包的路径,绝对路径 __dirname是node全局变量,文件路径
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        //所有涉及url文件都会加上这个路径
        publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader只负责将css文件进行加载
                //style-loader负责将样式添加到DOM中
                //use后从右向左读取,所以css-loader写在后面
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                //这是旧版写法
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                    loader: "less-loader"
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //大于这个区间的值使用file-loader,小于使用url的base64编码
                            limit: 130000,
                            //设置生成图片的路径以及格式
                            //name表示文件原名称,取八位hash值,然后拼接上文件类型
                            name: "img/[name]_[hash:8].[ext]"
                        },
                    },
                ],
            },
            //ES6转ES5
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            //加载vue文件
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ],
    },
    resolve:{
        //可以省略对应后缀
        extensions: ['.js','.css','.vue'],
        //vue起别名,可以识别.vue文件  (这是低版本的写法
        alias: {
            "vue$" : "vue/dist/vue.esm.js"
        }
    }
}