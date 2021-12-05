import { BingoBoardNumber } from "./BingoBoardNumber";

export class BingoBoard {
	board;
	hasBingo: boolean;

	constructor(boardnumbers: Array<Array<BingoBoardNumber>>) {
		this.board = boardnumbers;
		this.hasBingo = false;
	}

	mark(newNumber: number) {
		for (let i = 0; i < this.board.length; i++) {
			for (let k = 0; k < this.board[i].length; k++) {
				if (this.board[i][k].number === newNumber) {
					this.board[i][k].mark();
				}
			}
		}
	}
	checkBingo() {
		let counterRow;
		let counterCol;

		for (let i = 0; i < this.board.length; i++) {
			counterRow = 0;
			counterCol = 0;

			for (let k = 0; k < this.board[i].length; k++) {
				if (this.board[k][i].isMarked) {
					counterRow++;
				}
				if (this.board[i][k].isMarked) {
					counterCol++;
				}
				if (counterCol === 5 || counterRow === 5) {
					this.hasBingo = true;
					return true;
				}
			}
		}
	}

	calculateScore() {
		let score = 0;
		for (let i = 0; i < this.board.length; i++) {
			for (let k = 0; k < this.board[i].length; k++) {
				if (!this.board[i][k].isMarked) {
					score += this.board[i][k].number;
				}
			}
		}
		return score;
	}
}
