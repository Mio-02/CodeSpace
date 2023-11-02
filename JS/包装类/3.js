// 创建对象的三种方法：

// var obj = {} // 对象字面量|对象直接量

// let obj =  new Object() // 构造函数

// 自定义构造函数（就像一个工厂，可以批量化生成对象）：
function Car(color) {
    this.name = 'BMW'
    this.height = '1400'
    this.lang = '4900'
    this.weight = 1000
    this.color = color
}

// 直接读取和传参
let car1 = new Car('pink')
let car2 = new Car('green')
// car1.name = '玛莎'

console.log(car1);
console.log(car2);