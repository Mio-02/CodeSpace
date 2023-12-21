/* 
# 贪心+动态规划

  - 动态规划 DP(dynamic programming)
    处理最值问题
    - 最优子结构
      每一小步 都是最优的，一直是最优的。全局考虑
    - 状态转移方程

  - 贪心(greed)
    总是做出在当前看来是最好的选择
    不从整体最优上加以考虑，算法得到的是局部最优解
*/

/*
贪心：
低买高卖
最低的价格买入，最高的价格卖出
function maxProfit(prices) {
  let min = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = Math.max(profit[i] - min, profit) // 求最大利润
    } else {
      min = Math.min(min, prices[i]) // 求最小价格
    }


  }
  return profit
}
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
//动态规划：
var maxProfit = function(prices) {
  // 流程 自顶向下 递归
  // 当天卖 dp[i] = Math.max(price -min, dp[i-1])
  // 自下向上 迭代 dp[i]每一个都可以相信，最优子结构
  const dp = new Array(prices.length).fill(0);
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    dp[i] = Math.max(prices[i] - min, dp[i - 1])
  }
  return dp[prices.length - 1]
};
console.log(maxProfit([7,1,5,3,6,4]));