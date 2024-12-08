import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { containerWithMostWater } from "./container-with-most-water";
import { maximumDepth } from "./maximum-depth-of-binary-tree";
import { subsets } from "./subsets";
import { bestTimeToBuyAndSellStock } from "./best-time-to-buy-and-sell-stock";
import { mergeIntervals } from "./merge-intervals";

interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "reverse-linked-list": reverseLinkedList,
  "jump-game": jumpGame,
  "search-a-2d-matrix": search2DMatrix,
  "valid-parentheses": validParentheses,
  "container-with-most-water": containerWithMostWater,
  "maximum-depth-of-binary-tree": maximumDepth,
  "subsets": subsets,
  "best-time-to-buy-and-sell-stock": bestTimeToBuyAndSellStock,
  "merge-intervals": mergeIntervals,
};
