import { BingoBoard } from "./BingoBoard";

export class Bingo {
	boards: Array<BingoBoard>;
	bingo: boolean;

	constructor(boards: Array<BingoBoard>) {
		this.boards = boards;
		this.bingo = false;
	}

	pullNewNumber(number: number) {
		for (let i = 0; i < this.boards.length; i++) {
			if (!this.boards[i].hasBingo) {
				this.boards[i].mark(number);
				if (this.boards[i].checkBingo()) {
					console.log(
						"BINGOOO @ number: " +
							number +
							" Score: " +
							this.boards[i].calculateScore() * number
					);
				}
			}
		}
	}
}
