import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { part1 } from "./src/part1";
import { part2 } from "./src/part2";
import { Tree } from "./src/Tree";

let a = [
	[[[4, 3], 4], 4],
	[7, [[8, 4], 9]],
];
let b = [1, 1];

let array = [a, b];
let tree = new Tree(array);
let next = tree.reduce();
console.log(
	(next === "[[[[0,7],4],[[7,8],[6,0]]],[8,1]]") +
		"<- Basic split/explode in correct order:"
);

const input = readFileWithDirections("inputTest.txt");
console.log((part1(input) === 4140) + "<- part1 on example");
console.log((part2(input) === 3993) + "<- part2 on example");

let magArray1 = [
	[
		[
			[8, 7],
			[7, 7],
		],
		[
			[8, 6],
			[7, 7],
		],
	],
	[
		[
			[0, 7],
			[6, 6],
		],
		[8, 7],
	],
];
let magArray2 = [
	[
		[[0, 7], 4],
		[
			[7, 8],
			[6, 0],
		],
	],
	[8, 1],
];

let newTree1 = new Tree(magArray1);
let newTree2 = new Tree(magArray2);

console.log((newTree1.calculateMagnitude() === 3488) + "<- magnitude test");
console.log((newTree2.calculateMagnitude() === 1384) + "<- magnitude test");
