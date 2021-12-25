import { Operations } from "./Operations";

export class ALU {
	numbers: any;
	modelNumber: string;
	//modelNumberPos: number;
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
			//	console.log("operation:" + operation, "variable:" + variable);

			if (operation === "inp") {
				(this.numbers as any)[variable] = parseInt(
					this.modelNumber.substring(0, 1)
				);
				this.modelNumber = this.modelNumber.substring(1);
			} else {
				let p = row[2];
				let parameter;
				//	console.log("parameter before  " + p);
				if (isNaN(parseInt(p))) {
					//		console.log("parameter letter:  " + p);
					parameter = this.numbers[p];
					//		console.log("parameter from state " + parameter);
				} else {
					parameter = parseInt(p);
					//		console.log("parameter number " + parameter);
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
			//console.log(this.numbers);
		});
	}
	isValid() {
		// console.log(this.numbers);
		// console.log(this.numbers["z"]);
		return this.numbers["z"] === 0;
	}
}
