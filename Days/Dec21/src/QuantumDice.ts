export class QuantumDice {
	knownOutcomes: any = new Map();
	maxScore: number = 21;
	startingPositions: number[];

	constructor(startingPositions: number[]) {
		this.startingPositions = startingPositions;
	}

	newPosition = (from: number, steps: number) => {
		return ((from + steps - 1) % 10) + 1;
	};

	quantum(
		player1score: number,
		player1pos: number,
		player2score: number,
		player2pos: number,
		player1toRoll: boolean
	) {
		if (
			this.knownOutcomes.get(
				[
					player1score,
					player1pos,
					player2score,
					player2pos,
					player1toRoll,
				].join("")
			) != undefined
		) {
			return this.knownOutcomes.get(
				[
					player1score,
					player1pos,
					player2score,
					player2pos,
					player1toRoll,
				].join("")
			);
		}
		if (player1score >= this.maxScore) {
			this.knownOutcomes.set(
				[
					player1score,
					player1pos,
					player2score,
					player2pos,
					player1toRoll,
				].join(""),
				[1, 0]
			);
			return [1, 0];
		}
		if (player2score >= this.maxScore) {
			this.knownOutcomes.set(
				[
					player1score,
					player1pos,
					player2score,
					player2pos,
					player1toRoll,
				].join(""),
				[0, 1]
			);
			return [0, 1];
		}
		let wins = [0, 0];

		for (let dice1 = 1; dice1 <= 3; dice1++) {
			for (let dice2 = 1; dice2 <= 3; dice2++) {
				for (let dice3 = 1; dice3 <= 3; dice3++) {
					const stepsToMove = dice1 + dice2 + dice3;
					if (player1toRoll) {
						const newPos = this.newPosition(player1pos, stepsToMove);
						const outcome = this.quantum(
							player1score + newPos,
							newPos,
							player2score,
							player2pos,
							!player1toRoll
						);
						wins = [wins[0] + outcome[0], wins[1] + outcome[1]];
					} else {
						const newPos = this.newPosition(player2pos, stepsToMove);
						const outcome = this.quantum(
							player1score,
							player1pos,
							player2score + newPos,
							newPos,
							!player1toRoll
						);

						wins = [wins[0] + outcome[0], wins[1] + outcome[1]];
					}
				}
			}
		}
		this.knownOutcomes.set(
			[player1score, player1pos, player2score, player2pos, player1toRoll].join(
				""
			),
			wins
		);

		return wins;
	}

	playUntilScore(maxScore: number) {
		this.maxScore = maxScore;
		return Math.max(
			...this.quantum(
				0,
				this.startingPositions[0],
				0,
				this.startingPositions[1],
				true
			)
		);
	}
}
