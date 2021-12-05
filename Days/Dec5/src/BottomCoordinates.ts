import { Coordinate } from "./Coordinate";

export class BottomCoordinates {
	bottomCoordinates: Array<Array<Coordinate>> = [];
	size: number;

	constructor(size: number) {
		this.size = size;
		this.initiateBoard(size);
	}

	initiateBoard(size: number) {
		for (let x = 0; x < size; x++) {
			this.bottomCoordinates[x] = [];
			for (let y = 0; y < size; y++) {
				this.bottomCoordinates[x][y] = new Coordinate(x, y);
			}
		}
	}

	drawLine(x1: number, y1: number, x2: number, y2: number) {
		if (this.lineIsStraight(x1, y1, x2, y2)) {
			if (this.lineToInvert(x1, y1, x2, y2, "straight")) {
				[x1, y1, x2, y2] = this.swapCoordinates(x1, y1, x2, y2);
			}
			this.drawStraightLine(x1, y1, x2, y2);
			//
		} else if (this.lineIsDiagonalDown(x1, y1, x2, y2)) {
			if (this.lineToInvert(x1, y1, x2, y2, "diagonalDown")) {
				[x1, y1, x2, y2] = this.swapCoordinates(x1, y1, x2, y2);
			}
			this.drawDiagonalLineDown(x1, y1, x2, y2);
			//
		} else {
			if (this.lineToInvert(x1, y1, x2, y2, "diagonalUp")) {
				[x1, y1, x2, y2] = this.swapCoordinates(x1, y1, x2, y2);
			}
			this.drawDiagonalLineUp(x1, y1, x2, y2);
		}
	}

	lineToInvert(
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		typeOfLine: string
	) {
		switch (typeOfLine) {
			case "straight":
				return x2 < x1 || y2 < y1;
			case "diagonalDown":
				return x1 >= x2 && y1 >= y2;
			case "diagonalUp":
				return x1 > x2;
		}
	}

	lineIsStraight(x1: number, y1: number, x2: number, y2: number) {
		return x1 === x2 || y1 === y2;
	}

	lineIsDiagonalDown(x1: number, y1: number, x2: number, y2: number) {
		return (x2 >= x1 && y2 >= y1) || (x2 < x1 && y2 < y1);
	}

	swapCoordinates(x1: number, y1: number, x2: number, y2: number) {
		return [x2, y2, x1, y1];
	}

	drawStraightLine(x1: number, y1: number, x2: number, y2: number) {
		for (let x = x1; x <= x2; x++) {
			for (let y = y1; y <= y2; y++) {
				this.bottomCoordinates[x][y].addLine();
			}
		}
	}

	drawDiagonalLineDown(x1: number, y1: number, x2: number, y2: number) {
		for (let x = x1; x <= x2; x++) {
			for (let y = y1; y <= y2; y++) {
				if (x1 - x === y1 - y) {
					this.bottomCoordinates[x][y].addLine();
				}
			}
		}
	}

	drawDiagonalLineUp(x1: number, y1: number, x2: number, y2: number) {
		for (let x = x1; x <= x2; x++) {
			for (let y = y1; y >= y2; y--) {
				if (x1 - x === -(y1 - y)) {
					this.bottomCoordinates[x][y].addLine();
				}
			}
		}
	}

	getNumberOfDangerousPoints() {
		let counter = 0;
		for (let x = 0; x < this.size; x++) {
			for (let y = 0; y < this.size; y++) {
				if (this.bottomCoordinates[x][y].numberOflines > 1) {
					counter++;
				}
			}
		}
		return counter;
	}
}
