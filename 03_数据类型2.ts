// 6. object 类型
let obj: object;              // ★★★★★ 一般不会这么用，没有什么意义，因为 JavaScript 中 function、array... 等等都可以是一个对象
obj = [1, 2, 3];
obj = function () {

};
obj = new String("123");

// 6.1 object 类型的高级用法 1
let person: { name: string, age: number };    // 声明一个 person 对象，里面必须且只能有 name 属性 和 age 属性，且 name 为 string 类型，age 为 number 类型
person = { name: "zhangsan", age: 20 };
// person = { name: "lisi" };                              // 报错
// person = { name: "wangwu", age: 20, gender: "男" };     // 报错
// person = { name: 20, age: "zhangsan" };                 // 报错

// 6.2 object 类型的高级用法 2
let person2: { name: string, [propertyName: string]: any }    // 声明一个 person2 对象，里面必须包含类型为 string 的 name 属性，其他属性可以为任意类型任意个数
person2 = { name: "HHH", age: 18 }
person2 = { name: "CCC", age: 17, gender: "女" }
// person2 = { age: 20 }                                    // 报错

// 6.3 object 类型的高级用法 3
function showPerson(person: { name: string, age: number }) {   // 限制函数的形参类型为 object 对象，且里面必须且只能包含类型为 string 的 name 和 类型为 number 的 age
    console.log("姓名:" + person.name + "年龄:" + person.age);
}
showPerson(person)


// 7. array 类型（JavaScript 中数组类型中可以保存任何值，但是 TypeScript 中可以限制数组中成员的类型）let tempArr = [1, 2, 43, "341", "hello", true]// JavaScript 中数组成员可以任意
// 7.1 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
let arr: string[];              // 声明 arr 为 string 类型数组
let arr2: number[];             // 声明 arr2 为 number 类型数组
let arr3: object[];             // 声明 arr3 为 object 类型数组
arr = ["123", "456"]
// arr = [1, 2];                // 提示错误
arr2 = [777, 999];
// arr2 = ["111", "222"];       // 提示错误

// 7.2 第二种方式是使用数组泛型，Array<元素类型>
let arr4: Array<string>;        // 声明 arr4 为 string 类型数组
let arr5: Array<number>;        // 声明 arr5 为 number 类型数组
let arr6: Array<object>;        // 声明 arr6 为 object 类型数组
arr4 = ["123", "456"];
// arr4 = [123, 456];              // 提示错误


// 8. tuple（元组类型）———— 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let arr7: [string, number];     // 规定数组长度为 2 ，且第一个元素为 string 类型，第二个元素为 number 类型
arr7 = ["hello", 123];
// arr7 = [123, "hello"];          // 提示错误
// arr7 = ["hello", 123, 456];     // 提示错误

// 9. enum（枚举类型）
enum Gerder { "男", "女", "保密" }  // 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。  enum Gerder { 男, 女, 保密 } 这样写也可以
// enum Gerder1 { "男"=1, "女"=2, "保密"=3 } 
let personOne: Gerder = Gerder.男;
let personTwo: Gerder = Gerder.女;
let personThree: Gerder = Gerder.保密
console.log(personOne)             // 0
console.log(personTwo)             // 1
console.log(personThree)           // 2