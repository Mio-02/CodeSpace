let obj = {name: '德玛西亚'}

let ws = new WeakSet()
ws.add(obj)
// WeakSet对该对象的引用

// console.log(obj.name); // 普通引用
// obj = null // 把obj声明成一个可以被回收的变量，将obj清理回收之后
// console.log(obj.name); // 就拿不到了

console.log(ws); // WeakSet { <items unknown> }