import assert from "assert";
import { Problem } from "../types/problem";

export const mergeIntervalsHandler = (fn: any) => {
	try {
		const tests = [
			[[1, 3], [2, 6], [8, 10], [15, 18]],
			[[1, 2], [2, 3], [3, 4], [1, 3]],
			[[6, 8], [1, 9], [2, 4], [4, 6]],
		];
		const answers = [
			[[1, 6], [8, 10], [15, 18]],
			[[1, 4]],
			[[1, 9]],
		];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from mergeIntervalsHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMergeIntervalsJS = `function merge(intervals) {
  // Write your code here
};`;

export const mergeIntervals: Problem = {
	id: "merge-intervals",
	title: "6. Merge Intervals",
	problemStatement: `<p class='mt-3'>
    Given an array of intervals where intervals[i] = [start, end],
  </p>
    <p class='mt-3'>
    Merge overlapping intervals and return an array of non-overlapping intervals.
    </p>
  `,

	examples: [
		{
			id: 0,
			inputText: `intervals = [[1,3],[2,6],[8,10],[15,18]]`,
			outputText: `[[1,6],[8,10],[15,18]]`,
			explanation: "Merge overlapping intervals.",
		},
		{
			id: 1,
			inputText: `intervals = [[1,2],[2,3],[3,4],[1,3]]`,
			outputText: `[[1,4]]`,
			explanation: "Merge overlapping intervals.",
		},
		{
			id: 2,
			inputText: `intervals = [[6,8],[1,9],[2,4],[4,6]]`,
			outputText: `[[1,9]]`,
			explanation: "Merge overlapping intervals.",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= intervals.length <= 10^4</code></li>
    <li class='mt-2'><code>0 <= intervals[i][0] <= intervals[i][1] <= 10^5</code></li>`,
	starterCode: starterCodeMergeIntervalsJS,
	handlerFunction: mergeIntervalsHandler,
	starterFunctionName: "function merge(",
	order: 1,
};
