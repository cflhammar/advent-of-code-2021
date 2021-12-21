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

			this.players[player].position = this.newPosition(
				this.players[player].position,
				steps
			);
			this.players[player].score += this.players[player].position;

			mostRecentTotalScore = this.players[player].score;
			player = (player + 1) % 2;
		}

		return this.players[player].score * dice.rolls;
	}

	newPosition(from: number, steps: number) {
		return ((from + steps - 1) % 10) + 1;
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
