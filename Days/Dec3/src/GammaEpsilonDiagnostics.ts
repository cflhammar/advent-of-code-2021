export class GammaEpsilonDiagnostics {
	calculateGammaEpsilon(instructions: Array<Array<string>>) {
		let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

		for (let i = 0; i < instructions.length; i++) {
			let binary = instructions[i];
			for (let k = 0; k < binary.length; k++) {
				if (binary[k] === "1") {
					counter[k]++;
				}
			}
		}
		let gammaBinary = [];
		let epsilonBinary = [];

		for (let k = 0; k < counter.length; k++) {
			if (counter[k] > 500) {
				gammaBinary[k] = 1;
				epsilonBinary[k] = 0;
			} else {
				gammaBinary[k] = 0;
				epsilonBinary[k] = 1;
			}
		}

		var gammaRayDecimal = parseInt(gammaBinary.join(""), 2);
		var epsilonRayDecimal = parseInt(epsilonBinary.join(""), 2);
		return gammaRayDecimal * epsilonRayDecimal;
	}
}
