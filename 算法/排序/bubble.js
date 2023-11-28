let arr = [2, 3, 1, 4, 5]

// arr.sort((x, y) => { // sort直接操作原数组，做好排序
//     return x - y
// })
// console.log(arr);

// function bubbleSort(arr) {
//     const len = arr.Length
//     for (let i = 0; i < len; i++) {
//         // arr[i]
//         for (let j = i + 1; j < len; j++) {
//             // arr[j]
//             if (arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr));

function bubbleSort(arr) {
    let res = []
    while (arr.length) {
        res.push(getMin(arr))
        arr.splice(arr.indexOf(getMin(arr)), 1)
    }
    return res
}
function getMin(array) {
    let min = Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = array[i]
        }
    }
    return min
}
console.log(bubbleSort(arr));