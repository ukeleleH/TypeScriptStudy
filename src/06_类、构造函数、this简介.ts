//  经试验 ES2022 完全支持了 TS 的这种定义方式
class Animal {
    // 直接写属性，这种属性就是 “实例属性” (★★★★★ ES2015 中实例属性的声明和初始化都在 constructor 构造函数中进行)
    name = "动物";
    readonly age = 18;  // 使用 readonly 修饰则不允许修改
    // 使用 static 修饰的属性就是 “类的属性”（“静态属性”）（★★★★★ ES2015 通过 Animal.category 添加静态属性）
    static category = "生物"

    // 直接定义的方法就是 “实例方法” （★★★★★ ES2015 也是这样定义实例方法）
    sayHello() {
        console.log("hello");
    }
    // 使用 static 修饰的方法就是 “类的方法”（“静态方法”） （★★★★★ ES2015 也是这样定义静态方法）
    static sayHi() {
        console.log("hi");
    }
}

// 通过实例调用的属性与方法
let animal1 = new Animal()
console.log(animal1)
animal1.sayHello()

let animal2 = new Animal()
console.log(animal2)  // 因为类中的属性写死了，所以两个实例的属性一样
animal2.sayHello()

animal2.name = "我是动物"
console.log(animal2)
// animal2.age = 17  // 不允许修改

// 通过类来调用的属性与方法
console.log(Animal.category)
Animal.sayHi()