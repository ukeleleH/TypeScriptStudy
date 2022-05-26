(function () {
    class Father {
        // 实例属性
        name: string;
        money: number;
        constructor(name: string, money: number) {
            this.name = name;
            this.money = money;
        }
        // 实例方法
        say() {
            console.log(`我有${this.money}元`)
        }
    }


    class Son extends Father {
        // 子类可以有自己的属性
        address: string;  // 1.声明属性
        constructor(name: string, money: number, address: string) {
            super(name, money); // 子类如果写了 constructor 构造函数，必须要用 super() 手动调用父类的构造函数
            this.address = address; // 2.初始化属性
        }

        // 子类也可以有自己的方法
        sayHello() {
            console.log("hello,我是子类")
        }

        // 子类也可以有父类的同名方法（这叫做方法重写）
        // 当方法重写后，子类就会调用自己的这个方法，而不会调用父类的方法
        say() {
            console.log(`我在${this.address}`)
            super.say()   // ★★★★★★   注意：super() 只能在 constructor 构造函数中使用， 但是可以在普通方法中通过 super. 调用父类的普通方法, 【在类的方法中，super 就代表当前类的父类】
        }
    }

    // Son 继承了 Father，就具有了 Father 的属性和方法
    const son1 = new Son("张三", 100, "南昌")
    console.log(son1)
    son1.say()
    son1.sayHello()
})()