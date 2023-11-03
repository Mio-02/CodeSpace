// Person.prototype 就是这个函数的原型，原型也是对象

Person.prototype.say = function() {
    return 'Hello'
}

function Person() {
    this.name = '肖总'
    this.age = 18
    // this.say = function() {
    //     return 'Hello'
    // }
}

let p1 = new Person()
let p2 = new Person()
// console.log(p2.say());

console.log(p2.say == p1.say);