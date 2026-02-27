//You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

//You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

//Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

//Example 1:

//Input: prices = [10,1,5,6,7,1]

//Output: 6
//Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

//Constraints:

//1 <= prices.length <= 100
//0 <= prices[i] <= 100

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        // Best profit found so far
        let maxProfit = 0;

        // Lowest price seen so far (best buying opportunity)
        let lowestPrice = prices[0];

        for (let currentPrice of prices) {

            // Profit if we sell today
            const potentialProfit = currentPrice - lowestPrice;

            // Update best profit
            maxProfit = Math.max(maxProfit, potentialProfit);

            // Update lowest price if today's price is cheaper
            lowestPrice = Math.min(lowestPrice, currentPrice);
        }

        return maxProfit;
    }
}