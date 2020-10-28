//使用 commonjs的模块化规范
const {increment,decrement} = require("./js/mathUtil")
console.log(increment(100, 200));
console.log(decrement(200, 100));
//使用ES6的模块化规范
//import {increment,decrement} from "./mathUtil"
require("./css/normal.css")
require("./css/special.less")