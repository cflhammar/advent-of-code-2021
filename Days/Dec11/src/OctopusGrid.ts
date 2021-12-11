import { Octopus } from "./Octopus";

export class OctopusGrid {
	grid: Array<Array<Octopus>> = [];
	rows: number;
	cols: number;
	totalFlashes: number;
	constructor(grid: Array<Array<number>>) {
		this.rows = grid.length;
		this.cols = grid[0].length;
		this.totalFlashes = 0;
		this.fillGridWithOctopus(grid);
	}

	fillGridWithOctopus(grid: Array<Array<number>>) {
		for (let i = 0; i < this.rows; i++) {
			this.grid[i] = [];
			for (let k = 0; k < this.cols; k++) {
				this.grid[i][k] = new Octopus(grid[i][k]);
			}
		}
	}

	iterate(index: number) {
		for (let i = 1; i <= index; i++) {
			this.next();
		}
	}

	iterateUntilAllFlash() {
		let index = 0;
		do {
			this.next();
			index++;
		} while (this.countFlashes() != this.rows * this.cols);
		return index;
	}

	next() {
		this.resetAll();
		for (let x = 0; x < this.rows; x++) {
			for (let y = 0; y < this.cols; y++) {
				let octopus = this.grid[x][y];
				if (octopus.value === 9 && !octopus.flashed) {
					octopus.flash();
					this.flash(x, y);
				} else {
					octopus.increase();
				}
			}
		}
		this.totalFlashes += this.countFlashes();
	}

	resetAll() {
		this.grid.forEach((row) => {
			row.forEach((octopus) => {
				octopus.reset();
			});
		});
	}

	flash(x: number, y: number) {
		for (let i = x - 1; i <= x + 1; i++) {
			for (let k = y - 1; k <= y + 1; k++) {
				if (this.isWithinBoundaryAndNotCenter(i, k, x, y)) {
					let octopus = this.grid[i][k];
					if (!octopus.flashed) {
						octopus.increase();
						if (octopus.value === 10) {
							octopus.flash();
							this.flash(i, k);
						}
					}
				}
			}
		}
	}

	isWithinBoundaryAndNotCenter(
		x: number,
		y: number,
		centerx: number,
		centery: number
	) {
		return (
			x >= 0 &&
			x < this.rows &&
			y >= 0 &&
			y < this.cols &&
			!(x === centerx && y === centery)
		);
	}

	countFlashes() {
		let sum = 0;
		this.grid.forEach((row) => {
			row.forEach((octopus) => {
				if (octopus.flashed) sum += 1;
			});
		});
		return sum;
	}
}
