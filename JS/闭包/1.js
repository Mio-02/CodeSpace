var arr = []

// 第一种解决方法：
// for (let i = 0; i < 10; i++) {
//     function() {
//         arr[i] = function() {
//             console.log(i);
//         }
//     }
// }
for (var i = 0; i < 10; i++) {
    (function(j) {
        arr[i] = function() {
            console.log(j);
        }
    })(i)
}

// ——————————————
for (var j = 0; j < arr.length; j++) {
    arr[j]()
}

// 自执行函数：
// (function(){
//     console.log(123);
// })()
