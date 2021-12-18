import { Tree } from "./Tree";

export function treeHandler(input: any) {
	console.log(JSON.stringify(input));

	let tree = new Tree(input);
	//console.log(JSON.stringify(tree.tree, null, 2));
	//tree.explodeTree();
	let newInput = tree.getNewInput();
	console.log(JSON.stringify(newInput));
	// console.log(JSON.stringify(tree.tree));

	// let tree2 = new Tree(newInput);
	// tree2.explodeTree();
	// let newInput2 = tree2.getNewInput();
	// console.log(JSON.stringify(newInput2));

	// newInput = tree.getNewInput();
	// console.log(JSON.stringify(newInput));

	// tree = new Tree(newInput);
	// tree.splitTree();
	// newInput = tree.getNewInput();
	// console.log(JSON.stringify(newInput));

	// tree = new Tree(newInput);
	// tree.splitTree();
	// newInput = tree.getNewInput();
	// console.log(JSON.stringify(newInput));

	// tree = new Tree(newInput);
	// tree.explodeTree();
	// newInput = tree.getNewInput();
	// console.log(JSON.stringify(newInput));
}
