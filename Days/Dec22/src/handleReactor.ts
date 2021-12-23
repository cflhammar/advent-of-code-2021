import { Reactor } from "./Reactor";

export function handleReactor(instructions: any) {
	let reactor = new Reactor();

	for (let i = instructions.length - 1; i >= 0; i--) {
		let turnOn = instructions[i][0][0] === 1;
		let position = instructions[i][1];

		if (turnOn) {
			reactor.addCube(position);
		} else {
			reactor.addVacuum(position);
		}
	}
	return reactor.totalVolume;
}
