const memoize = require('./memo')

var count = 0
var fibonacci = function(n) {
    count++;
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = memoize(fibonacci)

console.time("fibonacci")
memoizedFibonacci(20)
console.log(count);
console.timeEnd("fibonacci")