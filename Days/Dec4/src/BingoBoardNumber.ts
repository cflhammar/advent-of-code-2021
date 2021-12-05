export class BingoBoardNumber {
	number: number;
	isMarked: boolean;
	constructor(number: number) {
		this.number = number;
		this.isMarked = false;
	}

	mark = () => {
		this.isMarked = true;
	};
}
