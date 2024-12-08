import assert from "assert";
import { Problem } from "../types/problem";

export const maxAreaHandler = (fn: any) => {
	try {
		const tests = [
			[1, 8, 6, 2, 5, 4, 8, 3, 7],
			[1, 1],
			[4, 3, 2, 1, 4],
			[2, 4, 5, 2, 6, 7],
		];
		const answers = [49, 1, 6, 12];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.equal(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from maxAreaHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeContainerWithMostWaterJS = `function maxArea(height) {
  // Write your code here
};`;

export const containerWithMostWater: Problem = {
	id: "container-with-most-water",
	title: "5. Container With The Most Water",
	problemStatement: `<p class='mt-3'>
    You are given an integer array <code>height</code>. Each element represents the height of a vertical line at that index.
  </p>
    <p class='mt-3'>
    You can choose any two lines to form a container with the x-axis. Return the maximum area of water a container can store between two lines.
    </p>
  `,

	examples: [
		{
			id: 0,
			inputText: `height = [1,8,6,2,5,4,8,3,7]`,
			outputText: `49`,
			explanation: "The container between index 1 (height 8) and index 6 (height 7) has the largest area: 49.",
		},
		{
			id: 1,
			inputText: `height = [1,1]`,
			outputText: `1`,
			explanation: "Only two lines, with area = 1.",
		},
		{
			id: 2,
			inputText: `height = [4,3,2,1,4]`,
			outputText: `6`,
			explanation: "Container between index 1 (height 3) and index 4 (height 4) has area = 6.",
		},
		{
			id: 3,
			inputText: `height = [2,4,5,2,6,7]`,
			outputText: `12`,
			explanation: "Container between index 2 (height 5) and index 4 (height 6) has area = 12.",
		},
	],
	constraints: `<li class='mt-2'><code>2 <= height.length <= 10^5</code></li>
    <li class='mt-2'><code>0 <= height[i] <= 10^5</code></li>`,
	starterCode: starterCodeContainerWithMostWaterJS,
	handlerFunction: maxAreaHandler,
	starterFunctionName: "function maxArea(",
	order: 4,
};
