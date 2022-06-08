class Snake {
    // 定义表示蛇的整个容器的属性
    element: HTMLElement;
    // 定义表示蛇头的属性 
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById("snake")!
        // 1. 初始化 head，类型断言也能起到空抑制运算符的作用
        // this.head = document.querySelector("#snake > div")!
        this.head = document.querySelector("#snake > div") as HTMLElement
        // 2. 初始化 bodies
        this.bodies = this.element.getElementsByTagName("div")
    }

    // 获取蛇的坐标（即蛇头的坐标）
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头的坐标
    set X(value: number) {
        if (this.X === value) return
        if (value < 0 || value > 460) {
            throw new Error("蛇撞墙了!")
        }
        // 控制蛇不能掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLMapElement).offsetLeft === value) {
            if (value > this.X) {
                // 表示蛇正在向左移动的时候,发生掉头了
                value = this.X - 10// 继续向左移动
            } else {
                // 表示蛇正在向右移动的时候,发生掉头了
                value = this.X + 10// 继续向右移动
            }
        }
        this.moveBody()
        this.head.style.left = value + "px"
        this.judgeHeadBody()
    }

    set Y(value: number) {
        if (this.Y === value) return
        if (value < 0 || value > 460) {
            throw new Error("蛇撞墙了!")
        }
        // 控制蛇不能掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLMapElement).offsetTop === value) {
            if (value > this.Y) {
                // 表示蛇正在向上移动的时候,发生掉头了
                value = this.Y - 10 // 继续向上移动
            } else {
                // 表示蛇正在向下移动的时候,发生掉头了
                value = this.Y + 10 // 继续向下移动
            }
        }
        this.moveBody()
        this.head.style.top = value + "px"
        this.judgeHeadBody()
    }

    // 增加蛇身体的方法
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 蛇身体移动的方法 (蛇身体包括蛇头)
    moveBody() {
        // 将每一节蛇的身体移动到前一节的位置(而且需要从后往前循环)
        for (let i = this.bodies.length - 1; i > 0; i--) {
            (this.bodies[i] as HTMLElement).style.left = (this.bodies[i - 1] as HTMLElement).offsetLeft + 'px';
            (this.bodies[i] as HTMLElement).style.top = (this.bodies[i - 1] as HTMLElement).offsetTop + 'px';
        }
    }

    // 判断蛇头是否撞到蛇身的方法
    judgeHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let body = this.bodies[i] as HTMLElement
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                throw new Error("撞到自己了!")
            }
        }
    }
}

// 向外暴露 Snake 类
export default Snake