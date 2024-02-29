// function a() {
//   setTimeout(() => {
//     console.log(1);
//   }, 1000)
// }

// function b() {
//   setTimeout(() => {
//     console.log(2);
//   }, 500)
// }

// 虽然a耗时更久，但我们现在要如何让a先执行完毕呢？

function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      // resolve('ok');
      resolve();
    }, 1000)
  })
}

function b() {
  setTimeout(() => {
    console.log(2);
  }, 500)
}

// a().then((res) => {
//   // console.log(res);
//   b()
// })

// 也可以这么写
a().then(b)