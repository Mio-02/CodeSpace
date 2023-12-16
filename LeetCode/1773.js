/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  var count = 0
  items.forEach((item) => {
    if (
      ruleKey === "type" && ruleValue === item[0] ||
      ruleKey === "color" && ruleValue === item[1] ||
      ruleKey === "name" && ruleValue === item[2]
      ) {
      count++
    }
  })
  return count
};