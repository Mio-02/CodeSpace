let arr = [5, 3, 2, 4, 1];

function insertionSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        // 将当前元素插入到已排序序列中
        let current = arr[i];
        let j = i;

        while (arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = current;
    }

    return arr;
}

// 调用插入排序函数
let sortedArr = insertionSort(arr);
console.log(sortedArr);