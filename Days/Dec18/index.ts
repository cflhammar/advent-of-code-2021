import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { Tree } from "./src/Tree";
import { treeHandler } from "./src/TreeHandler";

const array = [
	[
		[[[4, 3], 4], 4],
		[7, [[8, 4], 9]],
	],
	[1, 1],
];
treeHandler(array);

const a = [
	[
		[[0, 7], 4],
		[7, [[8, 4], 9]],
	],
	[1, 1],
];
const b = [
	[[[0, 7]], [4, 7, [[8, 4]], [9]]],
	[1, 1],
];
