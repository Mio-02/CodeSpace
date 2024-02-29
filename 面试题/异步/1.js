let a = 1;

setTimeout(() => { // 线程2
  a = 10
  console.log(a);
}, 2000)

setTimeout(() => { // 线程3
  a = 20
  console.log(a);
}, 1000)

let b = 3;

console.log(3);