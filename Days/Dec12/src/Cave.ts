import fs from "fs";

export class Cave {
	isStart: boolean = false;
	isEnd: boolean = false;
	name: string;
	isBig: boolean = false;
	connections: Array<Cave> = [];

	constructor(name: string) {
		this.name = name;
		if (name === "start") this.isStart = true;
		else if (name === "end") this.isEnd = true;
		else if (name === name.toUpperCase()) this.isBig = true;
	}

	addConnection(cave: Cave) {
		if (cave.isStart) return;
		if (this.isEnd) return;
		this.connections.push(cave);
	}

	explorePath(path: Array<Cave> = [], visitSmallCaveTwice: boolean = true) {
		let sum = 0;
		if (this.isEnd) {
			path.push(this);
			return sum + 1;
		} else {
			this.connections.forEach((cave) => {
				let _visitSmallCaveTwice = visitSmallCaveTwice;
				let skip =
					!cave.isBig && path.filter((c) => c.name === cave.name).length > 0;

				if (skip && visitSmallCaveTwice) {
					_visitSmallCaveTwice = false;
				} else if (skip) {
					return 0;
				}
				if (cave) {
					return (sum += cave.explorePath(
						[...path, this],
						_visitSmallCaveTwice
					));
				}
			});
		}
		return sum;
	}
}
