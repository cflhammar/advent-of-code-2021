export function CrabAligner(crabs: Array<number>, task: number) {
	let minFuel = 999999999999999;
	let maxPos = Math.max(...crabs);
	let fuel;

	for (let alignToPos = 0; alignToPos <= maxPos; alignToPos++) {
		fuel = 0;

		for (let k = 0; k < crabs.length; k++) {
			let currentCrabPos = crabs[k];
			let pos1 = Math.min(currentCrabPos, alignToPos);
			let pos2 = Math.max(currentCrabPos, alignToPos);

			if (task === 1) {
				fuel += Math.abs(pos1 - pos2);
			} else if (task === 2) {
				for (let p = pos1 + 1; p <= pos2; p++) {
					fuel += Math.abs(p - pos1);
				}
			}
		}
		minFuel = Math.min(minFuel, fuel);
	}
	return minFuel;
}
