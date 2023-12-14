/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
  var count = 0
  coins.forEach((item) => {
    if(item % 2 === 0) {
      count += item / 2
    } else if (item % 2 === 1) {
      count += item % 2 + Math.floor(item / 2)
    }
  })
  return count
};