(function () {
    // 1. 回顾之前学习的声明一个变量，限制它的类型为一个给定结构的对象类型（这种只能限制这个变量为这种结构的对象）
    // let obj: { name: string, age: number }; // 规定 obj 变量只能为给定结构的对象（必须且只能包含 name,age 属性）
    // obj = { name: "zhangsan", age: 39 }

    // 2. 定义一种类型
    type myObj = { name: string, age: number };    // 定义了一种必须且只能包含 name，age 属性的对象类型
    // 2.1 声明并初始化
    let one: myObj = { name: "lisi", age: 32 }
    let two: myObj; // 2.2.1 声明
    two = { name: "wangwu", age: 42 } // 2.2.2 初始化

    // 3. 定义接口
    interface MyInter {
        name: string;
        age: number;
    }
    // 3.1 接口也能实现类型定义能做的事情（因为接口就是用来规定一种结构）
    let three: MyInter = { name: "zhaoliu", age: 36 }

    // 4. 接口与抽象类的相似之处
    interface AInter {
        // 接口中的属性不能初始化（抽象类中的用 abstract 修饰的属性不能初始化，不过很少将一个属性申明为抽象属性）
        count: number;
        price: string;
        // 接口中方法不能有方法体（抽象类中用 abstract 修饰的方法也不能有方法体）
        sale(): void;
        // ★★★★★★★★★★★★ 总结：接口中所有的东西都是抽象的
    };

    // 4.1 通过类来实现接口（必须实现接口里面的属性和方法）
    class AClass implements AInter {
        count: number;
        price: string;
        constructor(count: number, price: string) {
            this.count = count;
            this.price = price
        }
        sale(): void {
            console.log("售价" + this.price)
        }
    }
    // 4.2 创建实例
    let AA = new AClass(1, "￥2000")
    console.log(AA)
    AA.sale()

    /* 
      ☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆
      总结：接口可以定义一个类的结构，接口可以去限制一个对象
    */
})()