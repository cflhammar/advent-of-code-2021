import { ISubMarine } from "./ISubmarine";

export class Submarine1 implements ISubMarine {
	calculate(instructions: Array<Array<string>>) {
		let forward = 0;
		let depth = 0;

		for (let i = 0; i < instructions.length; i++) {
			const direction = instructions[i][0];
			const value = parseInt(instructions[i][1]);

			if (direction === "forward") {
				forward += value;
			} else if (direction === "up") {
				depth = depth - value;
			} else if (direction === "down") {
				depth += value;
			}
		}

		return forward * depth;
	}
}
