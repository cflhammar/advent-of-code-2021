export class DiracDice {
	players: { position: number; score: number }[] = [];

	constructor(startingPositions: number[]) {
		this.players[0] = {
			position: startingPositions[0],
			score: 0,
		};
		this.players[1] = {
			position: startingPositions[1],
			score: 0,
		};
	}

	playUntilScore(maxScore: number) {
		let mostRecentTotalScore: number = 0;
		let player = 0;
		let dice = new Dice();

		while (mostRecentTotalScore < maxScore) {
			let steps = dice.roll() + dice.roll() + dice.roll();

			const currentPosition = this.players[player].position;
			const newPosition = ((currentPosition + steps - 1) % 10) + 1;

			this.players[player].position = newPosition;
			this.players[player].score += newPosition;

			mostRecentTotalScore = this.players[player].score;
			player = (player + 1) % 2;
		}

		return this.players[player].score * dice.rolls;
	}
}

class Dice {
	value: number = 0;
	rolls: number = 0;
	roll() {
		this.value++;
		this.rolls++;
		this.value = this.value > 100 ? 1 : this.value;
		return this.value;
	}
}
