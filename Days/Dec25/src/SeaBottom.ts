export class SeaBottom {
	seaBottom: string[][];

	constructor(seaBottom: string[][]) {
		this.seaBottom = seaBottom;
	}

	moveUntilStop() {
		let counter = 0;
		while (true) {
			counter++;
			console.log(counter);
			const nextSeaBottom = this.next();
			if (JSON.stringify(this.seaBottom) === JSON.stringify(nextSeaBottom)) {
				return counter;
			} else {
				this.seaBottom = nextSeaBottom;
			}
		}
	}

	next() {
		const seaBottomEast = this.nextEast(this.seaBottom);
		return this.nextSouth(seaBottomEast);
	}

	createNextTemplate(): string[][] {
		let template: string[][] = [];
		for (let y = 0; y < this.seaBottom.length; y++) {
			template[y] = [];
			for (let x = 0; x < this.seaBottom[0].length; x++) {
				template[y][x] = "";
			}
		}
		return template;
	}

	nextEast(seaBottom: string[][]) {
		let nextStep = this.createNextTemplate();

		for (let y = 0; y < seaBottom.length; y++) {
			for (let x = 0; x < seaBottom[0].length; x++) {
				if (nextStep[y][x] === ">") continue;

				let value = seaBottom[y][x];
				if (value === ">") {
					if (x < seaBottom[0].length - 1) {
						if (seaBottom[y][x + 1] === ".") {
							nextStep[y][x] = ".";
							nextStep[y][x + 1] = ">";
						} else {
							nextStep[y][x] = seaBottom[y][x];
						}
					} else {
						if (seaBottom[y][0] === ".") {
							nextStep[y][x] = ".";
							nextStep[y][0] = ">";
						} else {
							nextStep[y][x] = seaBottom[y][x];
						}
					}
				} else {
					nextStep[y][x] = seaBottom[y][x];
				}
			}
		}
		return nextStep;
	}

	nextSouth(seaBottom: string[][] = this.seaBottom) {
		let nextStep = this.createNextTemplate();

		for (let y = 0; y < seaBottom.length; y++) {
			for (let x = 0; x < seaBottom[0].length; x++) {
				if (nextStep[y][x] === "v") continue;

				let value = seaBottom[y][x];
				if (value === "v") {
					if (y < seaBottom.length - 1) {
						if (seaBottom[y + 1][x] === ".") {
							nextStep[y][x] = ".";
							nextStep[y + 1][x] = "v";
						} else {
							nextStep[y][x] = seaBottom[y][x];
						}
					} else {
						if (seaBottom[0][x] === ".") {
							nextStep[y][x] = ".";
							nextStep[0][x] = "v";
						} else {
							nextStep[y][x] = seaBottom[y][x];
						}
					}
				} else {
					nextStep[y][x] = seaBottom[y][x];
				}
			}
		}
		return nextStep;
	}
}
