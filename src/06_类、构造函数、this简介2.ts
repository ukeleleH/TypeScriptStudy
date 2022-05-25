// 因为 ts 在不同的文件中定义相同名称的变量也会有报错，所以下面使用立即执行函数限制一下作用域
(function () {
    class Animal {
        // 实例属性声明
        name: string;
        age: number;
        // constructor 被称为构造函数
        // 构造函数在对象创建时调用
        // 构造函数对实例属性进行初始化
        constructor(name: string, age: number) {
            // 实例属性初始化
            this.name = name;
            this.age = age;
        }

        sayHello() {
            // this 表示调用该方法的实例对象
            console.log(this)
        }
    }
    const animal1 = new Animal("小猫", 18);
    const animal2 = new Animal("小狗", 20);
    console.log(animal1)
    console.log(animal2)

    animal1.sayHello()
    animal2.sayHello()
})()