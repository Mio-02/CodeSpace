/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  return stones.split('').reduce((preVal, curVal) => {
  for (const jewel of jewels) {
    if (jewel === curVal) {
      return preVal + 1;
    }
  }
  return preVal;
}, 0);
}