export class CO2Diagnostics {
	calculateCO2(instructions: Array<Array<string>>) {
		for (let x = 0; x < instructions[0].length; x++) {
			let counter = 0;
			for (let i = 0; i < instructions.length; i++) {
				if (instructions[i][x] === "1") {
					counter++;
				}
			}

			let compareAgainst = instructions.length;
			for (let i = 0; i < instructions.length; i++) {
				if (counter >= compareAgainst / 2) {
					if (instructions[i][x] === "1") {
						instructions.splice(i, 1);
						i--;
					} else {
						//keep
					}
				} else {
					if (instructions[i][x] === "1") {
						//keep
					} else {
						instructions.splice(i, 1);
						i--;
					}
				}
				if (instructions.length === 1) {
					let binary = instructions[0];
					return parseInt(binary.join(""), 2);
				}
			}
		}
	}
}
