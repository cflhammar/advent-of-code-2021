import { Node } from "./Node";

export class Tree {
	tree: Node;
	numberPos: number = 0;
	constructor(input: any) {
		this.tree = new Node();
		this.addNodes(this.tree, input);
	}
	newOrder: any = {};
	found: boolean = false;

	addNodes(node: Node, array: any, level: number = 1) {
		array.forEach((element: any) => {
			if (Array.isArray(element)) {
				let nextNode = new Node();
				nextNode.level = level;
				this.addNodes(nextNode, element, level + 1);
				node.children.push(nextNode);
			} else {
				node.numbers[this.numberPos] = element;
				this.numberPos += 1;
			}
		});
	}

	resolveTree(): string {
		let currenTree = JSON.stringify(this.tree);
		let newTree;

		let stop = false;
		let action = "explode";
		while (!stop) {
			// console.log(action);
			switch (action) {
				case "explode":
					this.explodeTree();
					newTree = JSON.stringify(this.tree);
					if (currenTree === newTree) {
						action = "split";
					}
					currenTree = newTree;
					break;
				case "split":
					this.splitTree();
					newTree = JSON.stringify(this.tree);

					if (currenTree != newTree) {
						action = "explode";
						currenTree = newTree;
						break;
					} else {
						stop = true;
					}
			}
		}
		return this.getArray();
	}

	explodeTree(node: Node = this.tree) { LETA EFTER LEVEL 4 MED LÄGST POSISället
		if (node.level === 4) {
			let explode = Object.entries(node.numbers)
				.flat()
				.map((e: any) => parseInt(e));

			this.explodeNumber(this.tree, explode[0] - 1, explode[1]);

			this.explodeNumber(this.tree, explode[2] + 1, explode[3]);

			this.removeNode(this.tree, explode[0], explode[2]);
			this.decreasePos(this.tree, explode[0]);

			return 1;
		} else {
			if (node.children.length === 2) {
				let childPos1 = this.getNextPos(node.children[0]);
				let childPos2 = this.getNextPos(node.children[1]);
				if (childPos1 < childPos2) {
					this.explodeTree(node.children[0]);
					this.explodeTree(node.children[1]);
				} else {
					this.explodeTree(node.children[1]);
					this.explodeTree(node.children[0]);
				}
			} else if (node.children.length === 1) {
				this.explodeTree(node.children[0]);
			} else {
				return 0;
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

	lastPos() {
		this.getNewArray();
		let positions = Object.keys(this.newOrder);
		let intPpositions = positions.map((e) => parseInt(e));
		let max = Math.max(...intPpositions);
		return max;
	}

	// splitTree() {
	// 	this.split();

	// 	// if (typeof pos === "number") {
	// 	// this.increasePos(this.tree, pos);
	// 	// this.restorePosAfterSplit();
	// 	// 	return true;
	// 	// } else {
	// 	// 	return false;
	// 	// }
	// }

	splitTree(node: Node = this.tree) {
		for (const [pos, val] of Object.entries(node.numbers)) {
			if ((val as any) > 9) {
				let currentValue = val as any;
				delete node.numbers[pos];
				let newNode = new Node();
				newNode.level = node.level + 1;
				newNode.numbers[pos] = Math.floor(currentValue / 2);
				newNode.numbers[parseInt(pos) + "b"] = Math.round(currentValue / 2);
				node.children.push(newNode);
				//console.log("i did split for + ", val, pos);

				this.increasePos(this.tree, parseInt(pos));
				this.restorePosAfterSplit();
				return;
			}
		}
		node.children.forEach((element: any) => {
			return this.splitTree(element);
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

	decreasePos(node: Node = this.tree, pos1: number) {
		for (const [pos, val] of Object.entries(node.numbers)) {
			let numberPos = parseInt(pos);
			if (numberPos > pos1) {
				delete node.numbers[pos];
				node.numbers[numberPos - 1] = val;
			}
		}

		node.children.forEach((element: any) => {
			this.decreasePos(element, pos1);
		});
	}

	restorePosAfterSplit(node: Node = this.tree) {
		const keys = Object.keys(node.numbers);
		// console.log(keys);
		if (keys.length === 2) {
			if (keys[1].includes("b")) {
				// console.log(keys[1]);
				let position1 = parseInt(keys[0]);
				let position2 = keys[1];
				let value2 = node.numbers[position2];
				delete node.numbers[position2];
				node.numbers[position1 + 1] = value2;
			}
		}
		node.children.forEach((element: any) => {
			this.restorePosAfterSplit(element);
		});
	}

	increasePos(node: Node = this.tree, pos1: number) {
		const keys = Object.keys(node.numbers);
		//	console.log(keys);
		if (keys.length === 1) {
			let position = parseInt(keys[0]);
			//	console.log(position, pos1);
			if (position > pos1) {
				let value = node.numbers[position];
				delete node.numbers[position];
				node.numbers[position + 1] = value;
			}
		} else if (keys.length === 2) {
			let position1 = parseInt(keys[0]);
			let position2 = parseInt(keys[1]);
			//	console.log(position1, position2, pos1);
			if (position1 > pos1) {
				let value1 = node.numbers[position1];
				let value2 = node.numbers[position2];
				delete node.numbers[position1];
				delete node.numbers[position2];
				node.numbers[position1 + 1] = value1;
				node.numbers[position2 + 1] = value2;
			}
		}

		node.children.forEach((element: any) => {
			this.increasePos(element, pos1);
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
		// console.log(order);
		let newString: string = "[";
		let currentLevel = 0;
		let prevLevel = 0;
		let levelDiff;
		let c;
		let prevC;
		for (let val of Object.values(order)) {
			c = (val as any).c;
			if (c === 1) prevC = c;
			let value = (val as any).value;
			currentLevel = (val as any).level;
			levelDiff = currentLevel - prevLevel;
			// console.log(
			// 	"c: " +
			// 		c +
			// 		", sameLevel: " +
			// 		(c === prevC).toString() +
			// 		", curr: " +
			// 		currentLevel +
			// 		", next: " +
			// 		prevLevel +
			// 		", diff: " +
			// 		levelDiff
			// );

			if (c === prevC) {
				if (levelDiff < 0) {
					newString += value;
					newString += "";
				} else if (levelDiff > 0) {
					newString += "[".repeat(levelDiff);
					newString += value;
					newString += "";
				} else {
					newString += ",";
					newString += value;
					newString += "]";
				}
			} else {
				if (levelDiff < 0) {
					newString += "],";

					newString += value;
					newString += "";
				} else if (levelDiff > 0) {
					newString += "[".repeat(levelDiff);
					//newString += "],[";
					newString += value;
					//	newString += "";
				} else {
					newString += "],[";

					newString += value;
					newString += ",";
				}
			}

			prevLevel = currentLevel;
			//	console.log(newString);

			//	if (levelDiff != 0) newString += "]".repeat(Math.abs(levelDiff));
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
			c++;
			this.getNewArray(element, newPos + 1, c);
		});
	}

	getNewInput() {
		this.parseString();
		return 1; //JSON.parse(this.parseString());
	}

	calculateMagnitude(node: Node = this.tree) {
		const positions = Object.keys(node.numbers);

		let sum = 0;
		if (positions.length === 2) {
			sum += 3 * node.numbers[positions[0]];
			sum += 2 * node.numbers[positions[1]];
		} else if (positions.length === 1) {
			let childPos = this.getNextPos(node.children[0]);
			if (parseInt(positions[0]) < childPos) {
				sum += 3 * node.numbers[positions[0]];
				sum += 2 * this.calculateMagnitude(node.children[0]);
			} else {
				sum += 3 * this.calculateMagnitude(node.children[0]);
				sum += 2 * node.numbers[positions[0]];
			}
		} else {
			let childPos1 = this.getNextPos(node.children[0]);
			let childPos2 = this.getNextPos(node.children[1]);

			if (childPos1 < childPos2) {
				sum += 3 * this.calculateMagnitude(node.children[0]);
				sum += 2 * this.calculateMagnitude(node.children[1]);
			} else {
				sum += 3 * this.calculateMagnitude(node.children[1]);
				sum += 2 * this.calculateMagnitude(node.children[0]);
			}
		}

		return sum;
	}

	getNextPos(node: Node): number {
		// console.log(node);
		let keys = Object.keys(node.numbers);
		if (keys.length > 0) {
			return parseInt(keys[0]);
		} else {
			if (node.children.length > 0) {
				return this.getNextPos(node.children[0]);
			}
		}
		console.log(node);
		console.log(999);
		return 999;
	}

	getArray(node: Node = this.tree): any {
		const positions = Object.keys(node.numbers);
		// console.log(positions);

		let string = "";
		if (positions.length === 2) {
			// console.log("len = 2");
			string += "[";
			string += node.numbers[positions[0]].toString();
			string += ",";
			string += node.numbers[positions[1]].toString();
			string += "]";
		} else if (positions.length === 1) {
			// console.log("len = 1");
			let childPos = this.getNextPos(node.children[0]);
			//console.log(node.children[0]);
			if (parseInt(positions[0]) < childPos) {
				string += "[";
				string += node.numbers[positions[0]].toString();
				string += ",";
				string += this.getArray(node.children[0]);
				string += "]";
			} else {
				string += "[";
				string += this.getArray(node.children[0]);
				string += ",";
				string += node.numbers[positions[0]].toString();
				string += "]";
			}
		} else {
			// console.log("len = 0");
			let childPos1 = this.getNextPos(node.children[0]);
			let childPos2 = this.getNextPos(node.children[1]);

			let childLevel1 = node.children[0].level;
			let childLevel2 = node.children[1].level;

			if (childPos1 < childPos2) {
				string += "[";
				string += this.getArray(node.children[0]);
				string += ",";
				string += this.getArray(node.children[1]);
				string += "]";
			} else {
				string += "[";
				string += this.getArray(node.children[1]);
				string += ",";
				string += this.getArray(node.children[0]);
				string += "]";
			}
		}

		return string;
	}
}
