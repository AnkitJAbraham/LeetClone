import assert from "assert";
import { Problem } from "../types/problem";

export const bestTimeToBuyAndSellStockHandler = (fn: any) => {
	try {
		const tests = [
			[7, 1, 5, 3, 6, 4],
			[7, 6, 4, 3, 1],
			[1, 2, 3, 4, 5],
		];
		const answers = [5, 0, 4];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.equal(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from bestTimeToBuyAndSellStockHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeBestTimeToBuyAndSellStockJS = `function maxProfit(prices) {
  // Write your code here
};`;

export const bestTimeToBuyAndSellStock: Problem = {
	id: "best-time-to-buy-and-sell-stock",
	title: "8. Best Time to Buy and Sell Stock",
	problemStatement: `<p class='mt-3'>
    You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the ith day.
  </p>
  <p class='mt-3'>
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  </p>
  <p class='mt-3'>
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
  </p>
  <p class='mt-3'>
    Example 1:
  </p>
  <pre>
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  </pre>
  <p class='mt-3'>
    Example 2:
  </p>
  <pre>
    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.
  </pre>
`,

	examples: [
		{
			id: 0,
			inputText: `prices = [7,1,5,3,6,4]`,
			outputText: `5`,
			explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6).",
		},
		{
			id: 1,
			inputText: `prices = [7,6,4,3,1]`,
			outputText: `0`,
			explanation: "No profitable transactions possible.",
		},
		{
			id: 2,
			inputText: `prices = [1,2,3,4,5]`,
			outputText: `4`,
			explanation: "Buy at day 1 and sell at day 5.",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= prices.length <= 10^5</code></li>
    <li class='mt-2'><code>0 <= prices[i] <= 10^4</code></li>`,
	starterCode: starterCodeBestTimeToBuyAndSellStockJS,
	handlerFunction: bestTimeToBuyAndSellStockHandler,
	starterFunctionName: "function maxProfit(",
	order: 3,
};
