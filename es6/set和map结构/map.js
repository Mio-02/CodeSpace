// let obj = {
//     a: 1,
//     b: 2
// }
// 传统对象中的key是字符串类型,无法改变
// 所以es6引入了map弥补不足，可以塞入不同类型的key，用任意数据类型做key的一种对象

// let map = new Map();
// map.set({a:1}, 'hello')
// console.log(map); // Map(1) { { a: 1 } => 'hello' }



let map = new Map([
    ['name', '老王']
]);
map.set({a:1}, 'hello')
console.log(map); // Map(1) { 'name' => '老王' }
console.log(map.get('name'));
console.log(map.get({a:1})); // undefined，拿不到hello

let obj = {a:1}
map.set(obj, 'hello')
console.log(map.get(obj)); // hello，这样就拿到了

map.forEach((value, key, map) => {
    console.log(value, key, map);
}) // 所以map也具有迭代器属性

console.log(...map);
// map也可以被解构