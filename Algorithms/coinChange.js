var coinChange = function (coins, amount) {
  let dp = [0];
  for (let i = 1; i <= amount; i++) {
    dp.push(Infinity);
  }
  for (let i = 1; i <= amount; i++) {
    console.log(dp);
    for (let coin of coins) {
      console.log(dp);
      if (i - coin >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  if (dp[amount] !== Infinity) {
    return dp[amount];
  } else {
    return -1;
  }
};

console.log(coinChange([1, 2, 5], 11));
