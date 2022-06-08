class ScorePane {
    // 初始化分数和等级
    score = 0
    level = 1

    // 声明表示分数和等级的属性
    private scoreEle: HTMLElement
    private levelEle: HTMLElement

    // 设置一个变量来限制最高等级（增加程序的可扩展性）
    private maxLevel: number;

    // 设置多少分升一级（增加程序的可扩展性）
    private upScore: number;

    // 如果没传，默认最高等级 10 级，每 10 分升一级
    constructor(maxLevel = 10, upScore = 10) {
        this.maxLevel = maxLevel
        this.upScore = upScore
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
    }

    // 定义一个加法的方法
    addScore() {
        this.scoreEle.innerText = ++this.score + ''     // 转字符串的方法一
        // 判断分数为多少
        if (this.score % this.upScore === 0) {
            this.upLevel()
        }
    }

    // 定义一个加等级的方法
    upLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerText = String(++this.level) // 转字符串的方法二
        }
    }

}

// 向外暴露 ScorePane 类
export default ScorePane