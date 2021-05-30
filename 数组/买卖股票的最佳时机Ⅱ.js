//直解
var maxProfit1 = function (prices) {
    let len = prices.length;
    let max = 0;
    for (let i = 1; i < len; i++) {
        max += prices[i - 1] > prices[i] ? 0 : (prices[i] - prices[i - 1]);
    }
    return max;
};
console.log(maxProfit1([1, 2, 3, 4, 5, 6]));

//波峰波谷
var maxProfit2 = function (prices) {
    let len = prices.length;
    let max = 0;
    let i = 1;
    while (i < len) {
        while (i < len && prices[i - 1] >= prices[i]) {
            i++;//下降阶段
        }       //下降结束，prices[i-1]是波谷
        const trough = prices[i - 1];
        while (i < len && prices[i - 1] <= prices[i]) {
            i++;//上升阶段
        }       //上升结束，prices[i-1]是波峰
        const peak = prices[i - 1];
        max += peak - trough;
    }
    return max;
}
console.log(maxProfit2([7, 1, 5, 3, 6, 4]));