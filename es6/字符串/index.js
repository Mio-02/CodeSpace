let date = new Date() // 这个东西能得到一个时间
date // Sat Nov 11 2023 11:13:22 GMT+0800 (中国标准时间)
date.getFullYear() // 2023
date.getMonth() // 10（月份会少1）
date.getDate() // 11

// 以前的写法：
let time = date.getFullYear() + '年' + (Number(date.getMonth()) + 1) + '月' + date.getDate() + '日'

// 现在这么写：
let t = `${date.getFullYear()}年${+date.getMonth()+1}月${date.getDate()}日`

console.log(time);
console.log(t);