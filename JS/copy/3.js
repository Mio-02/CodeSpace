// 浅拷贝的实现原理
// 先看for.js
let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    }
}

function shalldowCopy(obj) {
    let objCopy = {}
    for (let key in obj) {
        // 浅拷贝肯定不要原型上的，所以要先判断
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = obj[key]
        }
    }
    return objCopy
}

// let newObj = shalldowCopy(obj)
// obj.age = 20
// console.log(newObj); // newObj的age还是18没受影响
// obj.like.type = 'swimming'
// console.log(newObj); // newObj的type受影响了
// 核心原因就是利用引用地址成功修改，那浅拷贝用在数组上怎么用？



let arr = ['a', {n: 1}, 1, undefined, null]

function shalldowCopy(obj) {
    if (typeof obj !== 'object' || obj == null) return
    let objCopy= obj instanceof Array ? [] : {}

    for (let key in obj) {
        // 浅拷贝肯定不要原型上的，所以要先判断
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = obj[key]
        }
    }
    return objCopy
}

let newObj = shalldowCopy(arr)
console.log(newObj);