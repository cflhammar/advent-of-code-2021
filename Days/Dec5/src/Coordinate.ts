export class Coordinate {
	row: number;
	col: number;
	numberOflines: number;

	constructor(row: number, col: number) {
		this.row = row;
		this.col = col;
		this.numberOflines = 0;
	}

	addLine() {
		this.numberOflines++;
	}
}
