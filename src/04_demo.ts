import { myCity } from "./04_demo2"
// 测试 tsconfig 里的编译选项

// 1. target 配置
let count: number = 777

// 2. module 配置
console.log(myCity)

// 3. noImplicitAny 配置；配置为 true ，则禁止隐式的 any
let num;  // 变量 num 默认是隐式的 any 类型，但是即使配置了 true，这个隐式的 any 类型也是允许的
// function sum(a, b) {  // a , b 也是隐式的 any 类型，函数中的隐式 any 类型不允许
//     return a + b
// }