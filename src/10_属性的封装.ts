(function () {
    class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    // 1. 以往创建一个对象，里面的属性可以被任意修改
    let person = new Person("孙悟空", 18)
    console.log(person);

    person.name = "猪八戒"
    person.age = 28
    console.log(person)

    // 2. TS 可以在定义类时，给属性添加修饰符
    /*
        修饰符有三种 (public、 private、 protected)
        public：默认值，表明公共的，在任何地方都能够访问
        private: 私有的，只有当前类自身能够访问改属性
        protected: 受保护的，只有当前类和它的子类能够访问该属性
    */

    // 2.1 private 修饰符
    class Product {
        // // ---属性申明---
        // private name: string;
        // private price: number;
        // constructor(name: string, price: number) {
        //     // ---属性初始化---
        //     this.name = name
        //     this.price = price
        // }

        // ★★★★★★  属性声明与初始化的语法糖形式
        constructor(private _name: string, private _price: number) { }

        // 这个方法一般叫做 getter 方法
        getName() {
            return this._name   // private 属性只能在内部访问
        }

        // 这个方法一般叫做 setter 方法
        setName(value: string) {
            this._name = value  // private 属性只能在内部修改它的值
        }

        // getter 方法的另一种写法(ES2015 也有这种类似的 getter 、setter)（这种写法叫做存取器）
        // 可以简化访问  （ 对象.price 就能访问 ）（ 不必 对象.price() )
        get price() {
            return this._price;
        };

        // setter 方法的另一种写法
        set price(value: number) {
            this._price = value
        }
    }
    let product = new Product("小米", 2000)
    console.log(product)

    // console.log(product.name)  // 不可以在类的外部访问或修改【私有】属性
    // product.name = "苹果"  // 不可以在类的外部访问或修改【私有】属性

    console.log(product.getName())    // 通过类内部的方法访问
    product.setName("苹果")  // 通过类内部的方法修改
    console.log(product.price); // 当 getter 使用访问器的形式，可以这样访问
    product.price = 3000  // 当 setter 使用访问器的形式，可以这样修改
    console.log(product);

    // 2.1.1 private 属性也不能在子类中访问
    class Television extends Product {
        constructor(_name: string, _price: number, private _count: number) {
            super(_name, _price);
        }

        getName(): string {
            // return this._name;    // ★★★★★ 不能在子类中访问父类的 private 属性
            return ''
        }

        getPrice(): number {
            // ★★★★★ 这里 _price 虽然是父类的私有属性, 但是 this.price 调用的是 getter 访问器
            return this.price
        }
    }

    let television = new Television("创维", 4000, 1)
    console.log(television);


    // 2.2 protected 修饰符（当前类和子类都能访问）
    class Animal {
        constructor(protected _name: string) { }
        getName(): string {
            return this._name
        }
    }

    class Dog extends Animal {
        getName(): string {
            return this._name    // 可以在子类中访问父类受保护的属性
        }
    }

    let animal = new Animal("小动物")
    console.log(animal);
    let dog = new Dog("小黑")
    console.log(dog);

})()