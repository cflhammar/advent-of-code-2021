import { Operations } from "./Operations";

export class ALU {
	numbers: any;
	modelNumber: string;
	instructions: string[];

	constructor(modelNumber: string, instructions: string[]) {
		this.modelNumber = modelNumber;
		this.instructions = instructions;
		this.numbers = { w: 0, x: 0, y: 0, z: 0 };
	}

	process() {
		let operations = new Operations();

		this.instructions.forEach((row, x) => {
			let operation = row[0];
			let variable = row[1];

			if (operation === "inp") {
				(this.numbers as any)[variable] = parseInt(
					this.modelNumber.substring(0, 1)
				);
				this.modelNumber = this.modelNumber.substring(1);
			} else {
				let p = row[2];
				let parameter;

				if (isNaN(parseInt(p))) {
					parameter = this.numbers[p];
				} else {
					parameter = parseInt(p);
				}

				switch (operation) {
					case "add":
						this.numbers[variable] = operations.add(
							this.numbers[variable],
							parameter
						);
						break;
					case "mul":
						this.numbers[variable] = operations.mul(
							this.numbers[variable],
							parameter
						);
						break;
					case "div":
						this.numbers[variable] = operations.div(
							this.numbers[variable],
							parameter
						);
						break;
					case "eql":
						this.numbers[variable] = operations.eql(
							this.numbers[variable],
							parameter
						);
						break;
					case "mod":
						this.numbers[variable] = operations.mod(
							this.numbers[variable],
							parameter
						);
						break;
				}
			}
		});
	}
	isValid() {
		return this.numbers["z"] === 0;
	}
}
