import fs from "fs";
export class ProcessImage {
	image: number[][];
	algorithm: number[];
	gen: number = 0;

	constructor(image: number[][], algorithm: number[]) {
		this.image = image;
		this.algorithm = algorithm;
	}

	iterate(steps: number) {
		for (let i = 0; i < steps; i++) {
			this.gen++;
			this.process();
		}
		return this.countLit();
	}

	countLit(): number {
		let counter = 0;
		for (let x = 0; x < this.image.length; x++) {
			for (let y = 0; y < this.image[0].length; y++) {
				counter += this.image[x][y];
			}
		}
		return counter;
	}

	outputToFile() {
		this.image.forEach((row) => {
			fs.writeFileSync("output.txt", row.join("") + "\n", { flag: "a" });
		});
	}

	process() {
		let nextVersion: number[][] = [];
		for (let x = 0; x < this.image.length; x++) {
			nextVersion[x] = [];
			for (let y = 0; y < this.image[0].length; y++) {
				nextVersion[x][y] = this.countNeighbours(x, y);
			}
		}
		this.image = nextVersion;
	}

	countNeighbours(_x: number, _y: number) {
		let binaryString = "";
		if (this.isBoundry(_x, _y)) {
			for (let x = _x - 1; x <= _x + 1; x++) {
				for (let y = _y - 1; y <= _y + 1; y++) {
					binaryString += this.image[x][y] === 1 ? "1" : "0";
				}
			}
			return this.getNextValueFromAlgortihm(parseInt(binaryString, 2));
		} else {
			return this.gen % 2 === 0 ? 0 : 1;
		}
	}

	getNextValueFromAlgortihm(binary: number): number {
		return this.algorithm[binary];
	}

	isBoundry(x: number, y: number) {
		return (
			x > 0 &&
			x < this.image.length - 1 &&
			y > 0 &&
			y < this.image[0].length - 1
		);
	}
}
