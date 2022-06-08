class Food {
    // 定义一个属性，表示食物所对应的 HTML 元素
    private element: HTMLElement;

    constructor() {
        // document.getElementById("food") 可能获取不到元素，可能为空
        // ! 类似 C# 中的空抑制运算符，明确告诉编译器这个不可能为空
        this.element = document.getElementById("food")!
    }

    // 获取食物 X 坐标的方法
    get X(): number {
        return this.element.offsetLeft
    }

    // 获取食物 Y 坐标的方法
    get Y(): number {
        return this.element.offsetTop
    }

    // 改变食物位置的方法
    changePosition() {
        // 生成一个随机位置
        // 因为 box 的宽高是 470px ，所以限制宽高的位置为 0 - 470px，而且因为食物的宽高是 10*10px ，所以食物的位置不能是 35，45 这样的数字，需要能够被 10 整除
        const X = Math.round(Math.random() * 46) * 10
        const Y = Math.round(Math.random() * 46) * 10
        this.element.style.top = X + "px"
        this.element.style.left = Y + "px"
    }

}

// 向外暴露 Food 类
export default Food