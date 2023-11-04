let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {
    b: 3,
    c: 4
}

// 将后面对象的属性全部挂到第一个身上
// 把obj2的值覆盖到obj1中且保留obj1中没被覆盖的值
Object.assign(obj1, obj2)

console.log(obj1);