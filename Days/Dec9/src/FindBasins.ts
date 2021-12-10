export class FindBasins {
	basinSizes: Array<number>;
	visitedMap: Array<Array<boolean>>;
	heightMap: Array<Array<number>>;

	constructor(heightMap: Array<Array<number>>) {
		this.basinSizes = [];
		this.visitedMap = [];
		this.heightMap = heightMap;
		this.initiateMaps();
	}

	initiateMaps() {
		this.heightMap.forEach((row, x) => {
			this.visitedMap[x] = [];
			row.forEach((element, y) => {
				this.visitedMap[x][y] = false;
				this.heightMap[x][y] = element < 9 ? 1 : 0;
			});
		});
	}

	getBasinSize() {
		this.findSizeOfAllBasins();
		return this.basinSizes
			.sort((a, b) => b - a)
			.slice(0, 3)
			.reduce((total, basin) => total * basin, 1);
	}

	findSizeOfAllBasins() {
		this.heightMap.forEach((row, x) =>
			row.forEach((e, y) => {
				let basinSize = this.exploreBasin(x, y);
				if (basinSize > 0) this.basinSizes.push(basinSize);
			})
		);
	}

	exploreBasin(x: number, y: number) {
		if (
			x < 0 ||
			x >= this.heightMap.length ||
			y < 0 ||
			y >= this.heightMap[0].length ||
			this.heightMap[x][y] === 0 ||
			this.visitedMap[x][y]
		) {
			return 0;
		} else {
			this.visitedMap[x][y] = true;
			let sum = 1;
			sum += this.exploreBasin(x + 1, y);
			sum += this.exploreBasin(x - 1, y);
			sum += this.exploreBasin(x, y + 1);
			sum += this.exploreBasin(x, y - 1);
			return sum;
		}
	}
}
