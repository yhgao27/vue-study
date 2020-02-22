//这个main.js 是我们项目的js入口

//1. 导入 jquery
//import *** from *** 是ES6 中导入模块的方式
import $ from 'jquery'

// const $ = require('jquery')  //这是node的写法

$(function () {
    $('li:odd').css('backgroundColor', 'lightblue')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})

//webpack 可以做什么事情：
    // 1.webpack 能够处理 js 文件的互相依赖关系
    // 2.webpack 能够处理 js 的兼容问题，把 高级的、浏览器不识别的语法，转为 低级的、浏览器能够识别的语法
    
//运行的命令格式： webpack 要打包的文件的路径 打包好的输出的文件的路径