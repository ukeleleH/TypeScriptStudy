/* 
    泛型用在 函数或类 的参数类型不明确时
    定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。
*/

// 1. 泛型使用 <> 规定，变量名任意
function fn1<T>(x: T): T {
    return x
}

let result = fn1(100);  // 参数 100 是 number 类型，泛型自动推断为 number 类型
let result2 = fn1<string>("hello");  // 手动指定泛型为 string 类型

// 2. 泛型可以同时指定多个
function fn2<T, K>(x: T, y: K): T {
    return x
}

let result3 = fn2(110, "hello");  // 自动推断 result3 类型为 number 
let result4 = fn2("hello", 119);  // 自动推断 result4 类型为 string 
let result5 = fn2<boolean, number>(true, 100)   // 手动指定泛型

// 3. 泛型也可以在类上使用
class MyClass<T>{
    constructor(private name: T) {

    }
}
console.log(new MyClass("小白")) // name 属性自动推断为 string 类型
console.log(new MyClass(true)) // name 属性自动推断为 boolean 类型

// 4. ★★★★★ 可以通过 extends 对泛型的范围进行限制
interface MyInter {
    name: string;
}

// 4.1 extends 接口
// 使用 T extends MyInter 表示泛型 T 必须是 MyInter 的子类，泛型可以 extends 接口、类、抽象类
function fn3<T extends MyInter>(x: T): string {
    return x.name
}

let result6 = fn3({ name: "123" })
let result7 = fn3({ name: "123", age: 123 })
// let result8 = fn3({ age: 123 })
// let result9 = fn3({ name: true })

class Person {
    constructor(public name: string) { }
}

// 4.2 extends 类
function fn4<T extends Person>(x: T): string {
    return x.name
}

let result10 = fn4(new Person("张三"))
console.log(result10)


