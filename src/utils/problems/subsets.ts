import assert from "assert";
import { Problem } from "../types/problem";

export const subsetsHandler = (fn: any) => {
	try {
		const tests = [
			[1, 2, 3],
			[0],
			[1],
		];
		const answers = [
			[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
			[[], [0]],
			[[], [1]],
		];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from subsetsHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeSubsetsJS = `function subsets(nums) {
  // Write your code here
};`;

export const subsets: Problem = {
	id: "subsets",
	title: "9. Subsets",
	problemStatement: `<p class='mt-3'>
    Given an integer array <code>nums</code> of unique elements, return all possible 
    subsets (the power set).
  </p>
  <p class='mt-3'>
    The solution set must not contain duplicate subsets. Return the solution in any order.
  </p>
  <p class='mt-3'>
    Example 1:
  </p>
  <pre>
    Input: nums = [1,2,3]
    Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
  </pre>
  <p class='mt-3'>
    Example 2:
  </p>
  <pre>
    Input: nums = [0]
    Output: [[],[0]]
  </pre>
`,

	examples: [
		{
			id: 0,
			inputText: `nums = [1,2,3]`,
			outputText: `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`,
			explanation: "Generate all subsets of nums = [1,2,3].",
		},
		{
			id: 1,
			inputText: `nums = [0]`,
			outputText: `[[],[0]]`,
			explanation: "Generate all subsets of nums = [0].",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= nums.length <= 10</code></li>
    <li class='mt-2'><code>-10 <= nums[i] <= 10</code></li>
    <li class='mt-2'><code>All the numbers of nums are unique</code></li>`,
	starterCode: starterCodeSubsetsJS,
	handlerFunction: subsetsHandler,
	starterFunctionName: "function subsets(",
	order: 3,
};
