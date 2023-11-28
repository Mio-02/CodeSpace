let arr = [5, 1, 3, 6, 2, 4, 7];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const base = arr[0]; // 选择第一个元素作为基准
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i]); // 比基准小的放在左边
        } else {
            right.push(arr[i]); // 比基准大的放在右边
        }
    }

    // 递归排序左右两边
    return [...quickSort(left), base, ...quickSort(right)];
}
// 调用快速排序函数
let sortedArr = quickSort(arr);
console.log(sortedArr);