import { Tree } from "./Tree";

export function part2(input: any) {
	let maximumMagnitude: number = 0;
	for (let i = 0; i < input.length; i++) {
		for (let k = 0; k < input.length; k++) {
			if (i != k) {
				let array = [input[i], input[k]];
				let tree = new Tree(array);
				let next = tree.resolveTree();
				let magnitude = tree.calculateMagnitude();
				if (magnitude > maximumMagnitude) maximumMagnitude = magnitude;
			}
		}
	}
	return maximumMagnitude;
}
