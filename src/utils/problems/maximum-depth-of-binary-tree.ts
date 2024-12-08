import assert from "assert";
import { Problem } from "../types/problem";

export const maxDepthHandler = (fn: any) => {
	try {
		const tests = [
			[3, 9, 20, null, null, 15, 7],
			[1, null, 2],
			[0],
		];
		const answers = [3, 2, 0];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.equal(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from maxDepthHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMaxDepthJS = `function maximumDepth(root) {
  // Write your code here
};`;

export const maximumDepth: Problem = {
	id: "max-depth-binary-tree",
	title: "7. Maximum Depth of Binary Tree",
	problemStatement: `<p class='mt-3'>
    Given the root of a binary tree, return its maximum depth.
  </p>`,
	examples: [
		{
			id: 0,
			inputText: `root = [3,9,20,null,null,15,7]`,
			outputText: `3`,
			explanation: "The maximum depth is 3.",
		},
		{
			id: 1,
			inputText: `root = [1,null,2]`,
			outputText: `2`,
			explanation: "The maximum depth is 2.",
		},
		{
			id: 2,
			inputText: `root = [0]`,
			outputText: `1`,
			explanation: "The maximum depth is 1.",
		},
	],
	constraints: `<li class='mt-2'><code>0 <= node count <= 10^4</code></li>`,
	starterCode: starterCodeMaxDepthJS,
	handlerFunction: maxDepthHandler,
	starterFunctionName: "function maximumDepth(",
	order: 2,
};
