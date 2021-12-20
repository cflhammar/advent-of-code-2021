import { Cave } from "./Cave";

export class CaveSystem {
	caves: any = {};
	cave_names: Set<string> = new Set();

	constructor(caveConnections: Array<Array<string>>) {
		this.cave_names = new Set(caveConnections.flat());

		for (const cave_name of this.cave_names) {
			this.caves[cave_name] = new Cave(cave_name);
		}

		for (const [from, to] of caveConnections) {
			this.caves[from].addConnection(this.caves[to]);
			this.caves[to].addConnection(this.caves[from]);
		}
	}

	getNumberOfCaves(part: number) {
		return part === 1
			? this.caves["start"].explorePath(undefined, false)
			: this.caves["start"].explorePath(undefined, true);
	}
}
