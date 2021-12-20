import { Cave } from "./Cave";

export class CaveSystem {
	caves: any = {};
	cave_names: Set<string> = new Set();

	constructor(caveConnections: Array<Array<string>>) {
		console.log(caveConnections);
		this.cave_names = new Set(caveConnections.flat());
		console.log(this.cave_names);

		for (const cave_name of this.cave_names) {
			this.caves[cave_name] = new Cave(cave_name);
		}

		for (const [from, to] of caveConnections) {
			this.caves[from].addConnection(this.caves[to]);
			this.caves[to].addConnection(this.caves[from]);
		}
	}

	async getNumberOfCaves() {
		let paths = this.caves["start"].explorePath();
	}
}
