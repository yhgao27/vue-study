const path = require('path')
//这个配置文件其实就是一个js文件，通过Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
    //在配置文件中，需要手动指定 入口和出口
    entry: path.join( __dirname, './src/main.js' ),//入口：表示要使用webpack 打包哪个文件
    output: {//输出文件相关配置
        path:path.join(__dirname,'./dist'), //这是指定文件的路径
        filename:'bundle.js'    //这是指定 文件名称

        }
}