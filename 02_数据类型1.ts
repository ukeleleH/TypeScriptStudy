// 1. 基本数据类型： string  number  boolean
let a: string = "hello";
let b: number = 100;
let c: boolean = true;

// 2. 字面量类型 
let myName: "zhangsan";
let myAge: 20;
let isMan: true
myName = "zhangsan";   // 限制 myName 变量的值只能是 "zhangsan"
myAge = 20;            // 限制 myAge 变量的值只能是 20
isMan = true           // 限制 isMan 变量的值只能是 true
// 2.1 （ 通过字面量可以确定变量的取值范围 ）
let myCity: "nanchang" | "guangzhou" | "hangzhou"   // ★★★★★这种用法叫做联合类型，确定 myCity 变量只能是这三个值之一
myCity = "guangzhou"

// 3. any | unknown (unknown 可以理解为类型安全的 any)
/* 
    any 就是任意数据类型，在 TypeScript 中尽量少用，否则就像 JavaScript 一样没有给变量确定类型 
*/
let something: any;     // 显式的确定 something 变量为 any 类型
let msg;                // msg 变量被隐式的确定为 any 类型
msg = 12;
msg = "hi";
msg = false;

let str: string;
str = msg;              // ★★★★★str 被声明为 string 类型，但是 msg 为 any 类型，导致 str 的类型检查也被关闭了（类型不安全）

let msg2: unknown;
msg2 = 13;
msg2 = "hihi";
msg2 = false;
// str = msg2;             // 会报错（ unknown 可以保证类型安全 ）
/* ★★★★★
   3.1 使用类型断言（通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。） 
   通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
*/
// 类型断言第一种写法
str = <string>msg2;    // 表明你清楚的知道 msg2 是 string类型 ，告诉编译器不用检查，放心吧
// 类型断言第二种写法
str = msg2 as string;


// 4. void（没有任何类型，在某种程度上可以看作与 any 相反的类型） | never（不能是任何类型）   ★★★★★ 这两个数据类型一般用在函数上
let data: void;   // 声明一个void类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null
data = undefined;
data = null;
function myFun(): void {      // void 声明函数没有返回值
    console.log("hello ts");
    // return undefined;
    // return null;
    // return 123;               // 有返回值就报错
}
/* 
  4.1 never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
  https://www.tslang.cn/docs/handbook/basic-types.html
  never 类型是任何类型的子类型，也可以赋值给任何类型；但是除了 never 本身，任何值都不能赋值给 never
*/
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// 5. undefined | null   （ 和 void 一样，这两个本身用处不大）
/*  ★★★★★ 
    默认情况下 undefined 和 null 是所有类型的子类型。 就是说你可以把 undefined 和 null 赋值给 number 类型的变量。
    然而，当你指定了--strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。 
*/
let flag1: undefined = undefined;
let flag2: null = null;
