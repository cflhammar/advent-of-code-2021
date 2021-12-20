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
			switch (action) {
				case "explode":
					this.hasExploded = false;
					this.explodeTree();
					newTree = JSON.stringify(this.tree);
					if (currenTree === newTree) {
						action = "split";
					}
					currenTree = newTree;
					break;
				case "split":
					this.hasSplit = false;
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

	hasExploded: boolean = false;
	explodeTree(node: Node = this.tree) {
		if (this.hasExploded) {
			return;
		} else if (node.level === 4) {
			let explode = Object.entries(node.numbers)
				.flat()
				.map((e: any) => parseInt(e));

			this.explodeNumber(this.tree, explode[0] - 1, explode[1]);
			this.explodeNumber(this.tree, explode[2] + 1, explode[3]);
			this.removeNode(this.tree, explode[0], explode[2]);
			this.decreasePos(this.tree, explode[0]);
			this.hasExploded = true;
			return 1;
		} else {
			if (node.children.length === 2 && !this.hasExploded) {
				let childPos1 = this.getNextPos(node.children[0]);
				let childPos2 = this.getNextPos(node.children[1]);
				if (childPos1 < childPos2) {
					this.explodeTree(node.children[0]);
					this.explodeTree(node.children[1]);
				} else {
					this.explodeTree(node.children[1]);
					this.explodeTree(node.children[0]);
				}
			} else if (node.children.length === 1 && !this.hasExploded) {
				this.explodeTree(node.children[0]);
			} else {
				return 0;
			}
		}
	}

	explodeNumber(node: Node, position: number, value: number) {
		if (this.hasExploded) return;

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

	hasSplit: boolean = false;
	splitTree(node: Node = this.tree) {
		if (this.hasSplit) {
			return;
		}
		if (node.children.length === 0 && Object.keys(node.numbers).length === 2) {
			let pos = Object.keys(node.numbers).map((e: string) => parseInt(e));
			pos = pos.sort((a: number, b: number) => a - b);
			let splitPos = -1;
			if (node.numbers[pos[0].toString()] > 9) splitPos = pos[0];
			else if (node.numbers[pos[1].toString()] > 9) splitPos = pos[1];
			if (splitPos >= 0) {
				this.hasSplit = true;
				let currentValue = node.numbers[splitPos.toString()];
				delete node.numbers[splitPos.toString()];
				let newNode = new Node();
				newNode.level = node.level + 1;
				newNode.numbers[splitPos.toString()] = Math.floor(currentValue / 2);
				newNode.numbers[splitPos.toString() + "b"] = Math.round(
					currentValue / 2
				);
				node.children.push(newNode);

				this.increasePos(this.tree, splitPos);
				this.restorePosAfterSplit();
				return;
			}
		} else if (node.children.length === 1) {
			let numberPos = Object.keys(node.numbers)[0];
			let childPos1 = this.getNextPos(node.children[0]);

			if (parseInt(numberPos) < childPos1) {
				if (node.numbers[numberPos] > 9) {
					this.hasSplit = true;

					let currentValue = node.numbers[numberPos];
					delete node.numbers[numberPos];
					let newNode = new Node();
					newNode.level = node.level + 1;
					newNode.numbers[numberPos] = Math.floor(currentValue / 2);
					newNode.numbers[parseInt(numberPos) + "b"] = Math.round(
						currentValue / 2
					);
					node.children.push(newNode);

					this.increasePos(this.tree, parseInt(numberPos));
					this.restorePosAfterSplit();
					return;
				} else {
					this.splitTree(node.children[0]);
				}
			} else {
				this.splitTree(node.children[0]);
				if (!this.hasSplit) {
					if (node.numbers[numberPos] > 9) {
						this.hasSplit = true;

						let currentValue = node.numbers[numberPos];
						delete node.numbers[numberPos];
						let newNode = new Node();
						newNode.level = node.level + 1;
						newNode.numbers[numberPos] = Math.floor(currentValue / 2);
						newNode.numbers[parseInt(numberPos) + "b"] = Math.round(
							currentValue / 2
						);
						node.children.push(newNode);

						this.increasePos(this.tree, parseInt(numberPos));
						this.restorePosAfterSplit();
						return;
					}
				}
			}
		} else if (node.children.length === 2) {
			let childPos1 = this.getNextPos(node.children[0]);
			let childPos2 = this.getNextPos(node.children[1]);
			if (childPos1 < childPos2) {
				this.splitTree(node.children[0]);
				this.splitTree(node.children[1]);
			} else {
				this.splitTree(node.children[1]);
				this.splitTree(node.children[0]);
			}
		}
	}

	removeNode(node: Node, pos1: number, pos2: number) {
		node.children.forEach((childNode: any) => {
			for (let i = 0; i < childNode.children.length; i++) {
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
		if (this.hasExploded) return;
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
		if (keys.length === 2) {
			if (keys[1].includes("b")) {
				let position1 = parseInt(keys[0]);
				let position2 = keys[1];
				let value2 = node.numbers[position2];
				delete node.numbers[position2];
				node.numbers[position1 + 1] = value2;
				return;
			}
		}
		node.children.forEach((element: any) => {
			this.restorePosAfterSplit(element);
		});
		return;
	}

	increasePos(node: Node = this.tree, pos1: number) {
		const keys = Object.keys(node.numbers);
		if (keys.length === 1) {
			let position = parseInt(keys[0]);
			if (position > pos1) {
				let value = node.numbers[position];
				delete node.numbers[position];
				node.numbers[position + 1] = value;
			}
		} else if (keys.length === 2) {
			let position1 = parseInt(keys[0]);
			let position2 = parseInt(keys[1]);
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
		let keys = Object.keys(node.numbers);
		if (keys.length > 0) {
			return parseInt(keys[0]);
		} else {
			if (node.children.length > 0) {
				return this.getNextPos(node.children[0]);
			}
		}
		return -1; // I should never reach this place
	}

	getArray(node: Node = this.tree): any {
		const positions = Object.keys(node.numbers);

		let string = "";
		if (positions.length === 2) {
			string += "[" + node.numbers[positions[0]].toString();
			string += ",";
			string += node.numbers[positions[1]].toString() + "]";
		} else if (positions.length === 1) {
			let childPos = this.getNextPos(node.children[0]);

			if (parseInt(positions[0]) < childPos) {
				string += "[" + node.numbers[positions[0]].toString();
				string += ",";
				string += this.getArray(node.children[0]) + "]";
			} else {
				string += "[" + this.getArray(node.children[0]);
				string += ",";
				string += node.numbers[positions[0]].toString() + "]";
			}
		} else {
			let childPos1 = this.getNextPos(node.children[0]);
			let childPos2 = this.getNextPos(node.children[1]);

			if (childPos1 < childPos2) {
				string += "[" + this.getArray(node.children[0]);
				string += ",";
				string += this.getArray(node.children[1]) + "]";
			} else {
				string += "[" + this.getArray(node.children[1]);
				string += ",";
				string += this.getArray(node.children[0]) + "]";
			}
		}

		return string;
	}
}
