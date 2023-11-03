Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

function Car(owner, color) {
    this.owner = owner
    this.color = color
}

var car1 = new Car('浪哥', 'red')
var car2 = new Car('但总', 'black')

// car1.color = 'pink'

// car2.name = '红旗' // 只能修改自己的name，无法修改原型的属性

// Car.prototype.name = '红旗' // 修改了原型的name

// delete car1.name // 删除不了

// delete Car.prototype.name // 删除了原型的name

console.log(car1);
console.log(car1.name);
console.log(car2);
console.log(car2.name);