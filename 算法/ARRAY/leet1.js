var nums = [2,7,11,15], target = 18
// var arr = new Array(2)

// for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] == target) {
//             arr[0] = i
//             arr[1] = j
//             console.log(arr);
//         }
//     }
// }

// var twoSum = function (nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         var res = target - nums[i]
//         var j = nums.indexOf(res)
//         if (i !== j && j !== -1) {
//             return [i,j]
//         }
//     }
// }

var twoSum = function (nums, target) {
    var diffs = {}
    for (var i = 0; i < nums.length; i++) {
        if (diffs[target - nums[i]] !== undefined) {
            return [diffs[target - nums[i]], i]
        }
        else diffs[nums[i]] = i
    }
}