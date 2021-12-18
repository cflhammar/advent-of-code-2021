import { Node } from "./Node";

export class Tree {
	tree: Node;
	numberPos: number = 0;
	constructor(input: any) {
		this.tree = new Node();
		this.addNodes(this.tree, input);
	}
	newOrder: any = {};

	addNodes(node: Node, array: any, level: number = 1) {
		array.forEach((element: any) => {
			if (Array.isArray(element)) {
				let nextNode = new Node();
				nextNode.level = level;
				this.addNodes(nextNode, element, level + 1);
				node.children.push(nextNode);
			} else {
				node.numbers[this.numberPos] = element;
				this.numberPos += 10;
			}
		});
	}

	explodeTree() {
		for (let l1 = 0; l1 < this.tree.children.length; l1++) {
			let childs = this.tree.children[l1];
			// console.log(childs);

			for (let l2 = 0; l2 < childs.children.length; l2++) {
				let childs2 = childs.children[l2];
				// console.log(l2, childs2.children[l2]);
				for (let l3 = 0; l3 < childs2.children.length; l3++) {
					let childs3 = childs2.children[l3];
					// console.log(l3, childs3.children[l3]);
					for (let l4 = 0; l4 < childs3.children.length; l4++) {
						let numbersToExplode = Object.entries(childs3.children[l4].numbers)
							.flat()
							.map((e: any) => parseInt(e));

						// console.log(numbersToExplode);
						this.explodeNumber(
							this.tree,
							numbersToExplode[0] - 10,
							numbersToExplode[1]
						);

						this.explodeNumber(
							this.tree,
							numbersToExplode[2] + 10,
							numbersToExplode[3]
						);

						this.removeNode(
							this.tree,
							numbersToExplode[0],
							numbersToExplode[2]
						);
						return;
					}
				}
			}
		}
	}
	explodeNumber(node: Node, position: number, value: number) {
		for (const [pos, val] of Object.entries(node.numbers)) {
			if (parseInt(pos) === position) {
				node.numbers[pos] += value;
				return;
			}
		}
		node.children.forEach((element: any) => {
			this.explodeNumber(element, position, value);
		});
	}
	splitTree(node: Node = this.tree) {
		for (const [pos, val] of Object.entries(node.numbers)) {
			if ((val as any) > 9) {
				let currentValue = val as any;
				delete node.numbers[pos];
				let newNode = new Node();
				newNode.level = node.level + 1;
				newNode.numbers[pos] = Math.floor(currentValue / 2);
				newNode.numbers[parseInt(pos) + 5] = Math.round(currentValue / 2);
				node.children.push(newNode);
				return;
			}
		}
		node.children.forEach((element: any) => {
			this.splitTree(element);
		});
	}

	removeNode(node: Node, pos1: number, pos2: number) {
		//console.log(pos1, pos2);
		node.children.forEach((childNode: any) => {
			for (let i = 0; i < childNode.children.length; i++) {
				//	console.log(childNode.children[i].numbers);
				if (pos1 in childNode.children[i].numbers) {
					childNode.children.splice(i, 1);
					childNode.numbers[pos1] = 0;
					return;
				}
			}
			this.removeNode(childNode, pos1, pos2);
		});
	}

	sortNewOrder = (order: any) => {
		return Object.keys(order)
			.sort()
			.reduce((obj: any, key: string) => {
				obj[key] = order[key];
				return obj;
			}, {});
	};

	parseString(): string {
		this.getNewArray();
		// console.log(this.newOrder);
		let order = this.sortNewOrder(this.newOrder);
		console.log(order);
		let newString: string = "";
		let currentLevel = -1;
		let nextLevel;
		let levelDiff;
		let c;
		let prevC;
		for (let val of Object.values(order)) {
			c = (val as any).c;
			if (c === 0) prevC = c;
			nextLevel = (val as any).level;
			levelDiff = currentLevel - nextLevel;
			//console.log(
			// 	"c: " + c,
			// 	"curr: " +
			// 		currentLevel +
			// 		", next: " +
			// 		nextLevel +
			// 		", diff: " +
			// 		levelDiff
			// );

			if (levelDiff < 0) {
				if (currentLevel != -1) newString += ",";
				newString += "[".repeat(Math.abs(levelDiff));
				newString += (val as any).value;
			} else if (levelDiff > 0) {
				if (c != prevC) {
					newString += "]".repeat(Math.abs(-levelDiff));
					newString += "],[";
					newString += (val as any).value;
				} else {
					newString += "]".repeat(Math.abs(-levelDiff));
					newString += ",";
					newString += (val as any).value;
				}
			} else {
				if (c != prevC) {
					newString += "],[";
				} else newString += ",";
				newString += (val as any).value;
			}
			currentLevel = (val as any).level;
			//console.log(newString);

			// if (levelDiff != 0) newString += char.repeat(Math.abs(levelDiff));
			// currentLevel = (val as any).level;
			// console.log(currentLevel, val);
			// newString += (val as any).value;
			prevC = c;
		}
		levelDiff = -1 - currentLevel;
		//console.log(currentLevel, levelDiff);
		newString += "]".repeat(Math.abs(levelDiff));

		//console.log(newString);
		return newString;
	}

	getNewArray(node: Node = this.tree, newPos: number = 0, c: number = 0) {
		for (const [pos, val] of Object.entries(node.numbers)) {
			this.newOrder[pos] = { value: val, level: node.level, c };
		}
		node.children.forEach((element: any) => {
			this.getNewArray(element, newPos + 1, c + 1);
			c++;
		});
	}

	getNewInput() {
		return JSON.parse(this.parseString());
	}
}
