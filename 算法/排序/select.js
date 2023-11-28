let arr = [5, 3, 2, 4, 1]

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // 假设当前元素是最小的
        let minIndex = i;

        // 在剩余的元素中找到最小的元素的索引
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // 将最小的元素与当前元素交换位置
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// 调用选择排序函数
let sortedArr = selectionSort(arr);
console.log(sortedArr);