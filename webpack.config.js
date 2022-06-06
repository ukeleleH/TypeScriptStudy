// 引入文件读取模块
const path = require("path")
// 引入 html 插件
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 引入 clean 插件（每次自动删除 dist 目录，生成最新的 dist 目录）
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    // 指定开发环境还是生产环境
    mode: "production",
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定出口文件
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        environment: {
            arrowFunction: false, // 关闭 webpack 的箭头函数，可选(如果要支持 IE 浏览器，就要配置这个，因为 IE 是不支持箭头函数， babel-loader 也不能转换 webpack 自生成的箭头函数)
            const: false // 如果要兼容 IE 10, 则同时需要关闭 webpack 自生成的 const 关键字
        }
    },

    // 指定 webpack 打包时要使用的模块
    module: {
        rules: [
            {
                test: /\.ts$/,
                // loader 的执行顺序是从后往前执行
                use: [
                    // 配置 babel-loader
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置其他配置项
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的浏览器版本
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        // 使用的 corejs 版本
                                        "corejs": "3",
                                        // 使用 corejs 的方式  “usage” 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: [/\.scss$/],
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    // 指定使用到的插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            // 可以传入一个配置对象
            {
                // title: "这是利用插件自动生成的 Html"   // 自定义页面标题
                template: "./index.html"             // 自定义网页模板
            }
        )
    ],

    // 设置引用模块（用来告诉 webpack 哪些文件可以作为模块来使用，因为一般 webpack 只知道 js 文件可以作为模块）
    resolve: {
        extensions: ['.js', '.ts']
    }

}