export function findLowPointRisk(heightMap: Array<Array<number>>) {
	let riskCounter = 0;

	for (let x = 0; x < heightMap.length; x++) {
		let row = heightMap[x];
		for (let y = 0; y < row.length; y++) {
			let lowPoint = true;
			let currentHeight = heightMap[x][y];

			if (x - 1 >= 0 && x - 1 < heightMap.length) {
				if (currentHeight >= heightMap[x - 1][y]) {
					lowPoint = false;
					continue;
				}
			}
			if (x + 1 >= 0 && x + 1 < heightMap.length) {
				if (currentHeight >= heightMap[x + 1][y]) {
					lowPoint = false;
					continue;
				}
			}
			if (y - 1 >= 0 && y - 1 < row.length) {
				if (currentHeight >= heightMap[x][y - 1]) {
					lowPoint = false;
					continue;
				}
			}
			if (y + 1 >= 0 && y + 1 < row.length) {
				if (currentHeight >= heightMap[x][y + 1]) {
					lowPoint = false;
					continue;
				}
			}

			if (lowPoint) {
				riskCounter += heightMap[x][y] + 1;
			}
		}
	}
	return riskCounter;
}
