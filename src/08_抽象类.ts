(function () {
    // 定义一个普通的 Animal 类
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        say() {
            console.log(`${this.name}在叫`)
        }
    }

    // Dog 类继承了 Animal 类
    class Dog extends Animal {

    }

    // 创建了一个 Animal 类的实例（但是很多时候我们不想让程序员通过 Animal 来创建实例，★★★★★ 所以就需要使用到抽象类）
    const animal1 = new Animal("动物")
    animal1.say()
    // 创建了一个 Dog 类的实例
    const dog1 = new Dog("旺财")
    dog1.say()

    // ---------------------------------------------------------------------------------------------------------

    // 定义一个抽象类：Product 类（当我们不希望一个类被创建实例，只希望它被继承，就可以创建一个抽象类）
    abstract class Product {
        price: number
        constructor(price: number) {
            this.price = price
        }
        say() {
            console.log(`我的价格是${this.price}`)
        }
    }

    // const product1 = new Product(1000)  // ★★★★★ 抽象类无法创建实例

    // 定义一个 Phone 类，继承 Product 类
    class Phone extends Product {
        // 子类自己的属性
        name: string
        constructor(name: string, price: number) {
            // 必须用 super() 显式调用父类的构造函数
            super(price);
            this.name = name;
        }
        // 重写父类的方法
        say() {
            console.log(`我是${this.name}手机，我的价格是${this.price}`)
        }
    }

    const xiaomi = new Phone("小米", 2000)
    xiaomi.say()
}())