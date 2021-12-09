export function findBasin(heightMap: Array<Array<number>>) {
	let visitedMap: Array<Array<boolean>> = [];

	heightMap.map((row, x) => {
		visitedMap[x] = [];
		row.map((element, y) => {
			visitedMap[x][y] = false;
			heightMap[x][y] = element < 9 ? 1 : 0;
		});
	});

	const exploreBasin = (x: number, y: number) => {
		if (
			x < 0 ||
			x >= heightMap.length ||
			y < 0 ||
			y >= heightMap[0].length ||
			heightMap[x][y] === 0 ||
			visitedMap[x][y]
		) {
			return 0;
		} else {
			visitedMap[x][y] = true;
			let sum = 1;
			sum += exploreBasin(x + 1, y);
			sum += exploreBasin(x - 1, y);
			sum += exploreBasin(x, y + 1);
			sum += exploreBasin(x, y - 1);
			return sum;
		}
	};
	let basinSizes: Array<number> = [];

	heightMap.map((row, x) =>
		row.map((e, y) => {
			let basinSize = exploreBasin(x, y);
			if (basinSize > 0) basinSizes.push(basinSize);
		})
	);

	return basinSizes
		.sort((a, b) => b - a)
		.slice(0, 3)
		.reduce((total, basin) => total * basin, 1);
}
