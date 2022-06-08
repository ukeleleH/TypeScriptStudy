// 引入其他 TS 文件
import Food from "./Food"
import Snake from "./Snake"
import ScorePane from "./ScorePane"

// 编写游戏控制类
class GameControl {
    // 食物
    private food: Food;
    // 蛇
    private snake: Snake;
    // 记分盘
    private scorePane: ScorePane;

    // 创建一个属性存储蛇的移动方向,也就是键盘按下的方向
    direction: string = ''

    // 创建一个属性判断游戏是否结束(蛇是否死了)
    private isLive = true

    // 构造函数
    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scorePane = new ScorePane(10, 2)

        this.init()
    }

    // 游戏初始化的方法, 调用后游戏即开始
    init() {
        // 绑定键盘按下事件
        document.addEventListener("keydown", this.keydownHandle.bind(this))
        this.move()
    }

    // 键盘按下事件
    keydownHandle(event: KeyboardEvent) {
        /* 
           给 document 绑定了事件监听函数 keydownHandler, keydownHandler 中 this 指向默认指向它的调用者 document
           所以 this.direction 的 this 会指向 document,所以要将 this 指向修改一下
        */
        this.direction = event.key
    }

    // 控制蛇移动的方法
    move() {
        let x: number = this.snake.X
        let y: number = this.snake.Y

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10
                break;
            case "ArrowDown":
            case "Down":
                y += 10
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10
                break;
            case "ArrowRight":
            case "Right":
                x += 10
                break;
        }

        // 给 X,Y 赋值这一块可能超出范围,蛇会撞墙
        try {
            this.snake.X = x
            this.snake.Y = y
        } catch (e: any) {
            alert(e.message + "Game Over!")
            this.isLive = false
        }

        this.judgeEatFood()
        this.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePane.level - 1) * 30)
    }

    // 判断蛇是否吃到食物的方法
    judgeEatFood() {
        if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
            // 加一分
            this.scorePane.addScore()
            // 增加蛇的身体
            this.snake.addBody()
            // 改变食物的位置
            this.food.changePosition()
        }
    }
}

// 向外暴露 GameControl 类
export default GameControl