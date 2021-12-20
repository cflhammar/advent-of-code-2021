import { Tree } from "./Tree";

export function part1(input: any) {
	let current = input[0];
	let tree = new Tree([]);

	for (let i = 1; i < input.length; i++) {
		let added = [current, input[i]];
		tree = new Tree(added);
		let next = tree.resolveTree();
		current = JSON.parse(next);
	}
	return tree.calculateMagnitude();
}
