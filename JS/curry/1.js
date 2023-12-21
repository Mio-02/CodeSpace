function add(a, b, c) {
  return a + b + c;
}
// 有时候不会一次性给到，前端的交互
// js curry 柯里化
// 每次接受一个参数
// add(a)(b)(c)
console.log(add.length);

// 函数的柯里化
function curry(fn) {
  // 收集函数 闭包 arr
  // 到位了之后运行 arr.length === fn.length fn(...arr)
  // 返回收集参数的函数
  // rest 运算符 args是数组 闭包空间 自由变量
  let judge = (...args) => {
    if (args.length === fn.length) return fn(...args) // 推出条件
    // 返回函数，继续收集函数
    return (...arg) => judge(...args, ...arg)
  }
  return judge
}

const curryAdd = curry(add)
console.log(curryAdd(1)(2)(3));