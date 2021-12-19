import { Tree } from "./Tree";

export function treeHandler(input: any) {
	let current = input[0];
	let tree = new Tree([]);
	//console.log(input);

	for (let i = 1; i < 2; i++) {
		let added = [current, input[i]];
		//	console.log(added);
		tree = new Tree(added);
		console.log(JSON.stringify(tree.tree, null, 2));
		let next = tree.resolveTree();
		current = JSON.parse(next);
		//console.log(next);
	}
	console.log(JSON.stringify(current));
	return tree.calculateMagnitude();
}
