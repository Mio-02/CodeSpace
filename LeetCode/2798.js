/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  let a = 0;
  hours.forEach(hour => {
    if (hour >= target) {
      a += 1;
    }
  })
  return a;
}