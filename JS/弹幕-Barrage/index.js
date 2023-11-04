// window.onload = function() {

// }

// 历史弹幕
let data = [
    { value: '第一', color: 'red', fontSize: 22, time: 5 },
    { value: '今天你听妈妈的话了吗？', color: 'red', fontSize: 30, time: 10 },
    { value: '不听不听', color: 'green', fontSize: 30, time: 10 },
    { value: '周董我男神', color: '#00a1f5', fontSize: 10, time: 15 }
]

// 整理弹幕数据
CanvasBarrage.prototype.render = function() {
    // 清除画布
    this.clear()
    this.renderBarrage() // 把弹幕绘制在画布上
    if (!this.isPaused) { // 播放状态
        requestAnimationFrame(this.render.bind(this)) // 定时器，默认为16.7ms
    }
}
CanvasBarrage.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) // 清除画布
}
CanvasBarrage.prototype.renderBarrage = function() {
    // 拿到视频当前播放的时间
    let time = this.video.currentTime

    // 遍历所有的弹幕
    this.barrages.forEach(function(barrage) {
        if (time >= barrage.time && !barrage.flag) { // 判断当前视频播放的时间到达弹幕出现的时间
            // 被初始化的弹幕对象就不再操作
            if (!barrage.isInit) {
                barrage.init()
                barrage.isInit = true
            }

            // 控制弹幕左移
            barrage.x -= barrage.speed
            barrage.renderEach()

            if (barrage.x < -barrage.width) { // 从左边出屏幕
                barrage.flag = true
            }
        }
    })
}
CanvasBarrage.prototype.add = function(obj) { // 添加新的弹幕
    this.barrages.push(new Barrage(obj, this))
}

// 形参可以设置默认参数
function CanvasBarrage(canvas, video, opts = {}) {
    if (!canvas || !video) return // 如果没传前两个参数就不发送（代码不换行时可以省略花括号）

    this.canvas = canvas
    this.video = video
    // 设置canvas宽高和video保持一致
    this.canvas.width = video.width
    this.canvas.height = video.height
    // 获取画布
    this.ctx = canvas.getContext('2d')
    // 初始化弹幕，默认给定一些参数
    let defOpts = {
        color: '#e91e63',
        fontSize: 20,
        speed: 1.5,
        opacity: 0.5, // 透明度
        data: []
    }
    // 把后两者的参数全部挂到this身上，便于操作
    Object.assign(this, defOpts, opts)
    // 视频播放，弹幕才出现
    this.isPaused = true // Paused--暂停
    // 获取到所有的弹幕
    this.barrages = this.data.map((item) => new Barrage(item, this)) // 拿到所有的弹幕都修饰一下
    // 移动弹幕
    this.render()
}

// let canvas = document.getElementById('canvas')
// 我需要之后新的弹幕能接收到这些参数
// new CanvasBarrage(canvas, video, { value: 'xx', color: 'xx', fontSize: xx, time: xx })

// 修饰一条弹幕
Barrage.prototype.init = function() { // 初始化这条弹幕
    this.color = this.obj.color || this.context.color
    this.speed = this.obj.speed || this.context.speed
    this.opacity = this.obj.opacity || this.context.opacity
    this.fontSize = this.obj.fontSize || this.context.fontSize

    // 读取每条弹幕的宽度
    let p = document.createElement('p')
    p.style.fontSize = this.fontSize + 'px'
    p.innerHTML = this.value
    document.body.appendChild(p)
    // 读取到宽度之后立马删除
    this.width = p.offsetWidth
    document.body.removeChild(p)

    // 设置弹幕的位置
    this.x = this.context.canvas.width
    this.y = this.context.canvas.height * Math.random() // 使出现的高度为随机值
    // 处理上下方超出边界
    if (this.y < this.fontSize) {
        this.y = this.fontSize
    } else if (this.y > this.context.canvas.height - this.fontSize) {
        this.y = this.context.canvas.height - this.fontSize
    }
}
Barrage.prototype.renderEach = function() {// 将这条弹幕绘制在画布上
    // 先设置画布的文字字体和字号
    this.context.ctx.font = `${this.fontSize}px Arial`
    // 设置画布的文字颜色
    this.context.ctx.fillStyle = this.color
    // 绘制文字
    this.context.ctx.fillText(this.value, this.x, this.y)
}
function Barrage(obj, context) { // context == this
    // console.log(context);
    this.value = obj.value // 新弹幕的内容
    this.time = obj.time
    this.obj = obj // 为了取值方便
    this.context = context
}

// 发送弹幕
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $text = document.getElementById('text') // $没有意义，只是用于区分,下面同理
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

// 监听$btn身上的点击事件
// 最早的写法
// $btn.onclick = function() {

// }
// 新一点的写法
// $btn.addEventListener('click', function() {

// })

// 创建整理弹幕的实例对象
let canvasBarrage = new CanvasBarrage(canvas, video, {data}); 
// 当对象中的key和value相同时可以只写一个：{data: data} 等于 {data}
video.addEventListener('play', function() {
    canvasBarrage.isPaused = false
    canvasBarrage.render() // 处理每一条弹幕
})

function send() {
    // 读取文本内容
    let value = $text.value
    // 当前视频播放时间
    let time = video.currentTime
    // 拿到用户选择的颜色
    let color = $color.value
    // 拿到字号
    let fontSize = $range.value
    let obj = {
        value: value,
        color: color,
        fontSize: fontSize,
        time: time
    }
    // console.log(obj);

    // 添加弹幕数据
    canvasBarrage.add(obj)
}
$btn.addEventListener('click', send)
// 监听键盘的回弹
$text.addEventListener('keyup', function(e) {
    // console.log(e);
    if (e.keyCode === 13) {
        send()
    }
})