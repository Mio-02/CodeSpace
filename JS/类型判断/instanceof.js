// 实例对象的隐式原型等于构造函数的显式原型，层层套娃
// 原理就是一层层往上找Object,直到找到null，只要中间找到了Object，那就是true：
// function instanceOF(L, R) {
//     if (L.__proto__ === R.prototype) {
//         return true
//     } else {
//         if (L.__proto__.__proto__ === R.prototype) {
//             return true
//         } else {
//             ... // 这样一直找下去代码就写不完了
//         }
//     }
// }
// 所以我们换一种写法：
function instanceOF(L, R) {
    let left = L.__proto__
    let right = R.prototype

    while (left !== null) {
        if (left === right) return true

        left = left.__proto__
    }

    return false
}

// 目的：
console.log(instanceOF([], Array)); // true
console.log(instanceOF([], Object)); // true

// 那两种判定方法都有缺陷，有没有一种方法能够将这两种方法归并好用的呢？看toString.js