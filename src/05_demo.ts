// 学习 TypeScript 结合 webpack 打包工具使用

// 默认引入模块都是 js 文件，在 webpack.config.js 里配置 resolve 选项，可以引入 ts 文件
import { idol } from "./05_demo2"

function sumFun(x: number, y: number): number {
    return x + y
}

console.log(sumFun(123, 456))
console.log("zhangsan");
console.log("lisi")
console.log(idol)

// 演示 babel-loader 将 const 转换为 var
const obj = { name: "孙悟空", age: 18 }
console.log(obj)
obj.age = 20
console.log(obj);

// 演示 corejs 的生效， corejs 一般作用于更高级的用法， 例如 Promise
console.log(Promise)


