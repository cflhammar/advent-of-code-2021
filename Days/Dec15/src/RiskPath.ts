// Recursive function that checks all paths to find lowest risk
// OUT OF MEMORY when input size increases
export class RiskPath {
	riskMap: number[][];
	visitedTemplate: boolean[][] = [];
	minRisk: number = 99999;
	constructor(input: string[][]) {
		this.riskMap = input.map((row, x) => {
			this.visitedTemplate[x] = [];
			return row.map((e, y) => {
				this.visitedTemplate[x][y] = false;
				return parseInt(e);
			});
		});
	}

	explore(
		x: number,
		y: number,
		risk: number,
		visited: boolean[][] = this.visitedTemplate
	) {
		let _visited = visited.map((row) => row.slice());
		let _risk = risk;
		if (x === this.riskMap.length - 1 && y === this.riskMap[0].length - 1) {
			risk += this.riskMap[x][y] - this.riskMap[0][0];

			if (_risk < this.minRisk) {
				this.minRisk = _risk;
				console.log(this.minRisk);
			}

			return _risk;
		} else {
			_visited[x][y] = true;
			_risk += this.riskMap[x][y];
			if (_risk < this.minRisk && this.isWithin(x, y + 1, _visited))
				this.explore(x, y + 1, _risk, _visited);
			//	if (_risk < this.minRisk && this.isWithin(x - 1, y, _visited))
			//	this.explore(x - 1, y, _risk, _visited);
			if (_risk < this.minRisk && this.isWithin(x + 1, y, _visited))
				this.explore(x + 1, y, _risk, _visited);
			//	if (_risk < this.minRisk && this.isWithin(x, y - 1, _visited))
			//	this.explore(x, y - 1, _risk, _visited);
		}
	}

	isWithin(x: number, y: number, visited: boolean[][]) {
		return (
			x >= 0 &&
			x < this.riskMap.length &&
			y >= 0 &&
			y < this.riskMap[0].length &&
			!visited[x][y]
		);
	}
}
