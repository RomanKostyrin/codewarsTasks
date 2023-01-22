var maxProfit = function (prices) {
  let min = prices[0];
  return prices.reduce((acc, el) => {
    min = Math.min(min, el);
    return Math.max(acc, el - min);
  }, 0);
};
