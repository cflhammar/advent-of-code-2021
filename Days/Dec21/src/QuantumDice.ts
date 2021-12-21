export class QuantumDice {
	possibleRollSums: any = new Map();

	constructor() {
		for (let r1 = 1; r1 <= 3; r1++) {
			for (let r2 = 1; r2 <= 3; r2++) {
				for (let r3 = 1; r3 <= 3; r3++) {
					const sum: number = r1 + r2 + r3;

					this.possibleRollSums.set(
						sum,
						(this.possibleRollSums.get(sum) | 0) + 1
					);
				}
			}
		}
	}

	position(from: number, steps: number) {
		return ((from + steps - 1) % 10) + 1;
	}
}
