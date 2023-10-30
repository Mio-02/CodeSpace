let arr = [1,2,3,4,5,6,7,8];

arr.splice(3, 1) // 从三号坑开始删除1个坑位
arr.splice(3, 0, 100) // 从三号坑开始删除0个坑位再插入一个数100

console.log(arr);