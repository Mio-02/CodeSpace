function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex

    // 下述new会使得在函数内生成一个this对象，并返回
    // let this = {
    //     name: name,
    //     age: age,
    //     sex: sex
    // }

    // return this
}

let p = new Person('海军', 18, '男')
console.log(p);



function Person(name, age) {
    var that = {}
    this.name = name
    this.age = age
    return taht
}

let p1 = new Person('海军', 19)
let p2 = new Person('杨杨', 18)

console.log(p1);
console.log(p2);