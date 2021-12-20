import { Cave } from "./Cave";

export class CaveExplorer {
	caveConnections: Array<Array<string>> = [];
	paths: Array<Array<Cave>> = [];

	exploreCaves(caveConnections: Array<Array<string>>) {
		this.caveConnections = caveConnections;
		this.caveConnections.forEach((pair) => {
			if (pair[0] === "start") {
				let startingCave = new Cave(pair[0]);
				let secondCave = new Cave(pair[1]);
				startingCave.visitCave();
				secondCave.visitCave();
				let path = [startingCave, secondCave];
				this.search(secondCave, path);
			}
		});
		console.log(this.paths);
	}

	search(cave: Cave, path: Array<Cave>) {
		console.log(path);
		if (cave.name === "end") {
			return this.paths.push(path);
		} else {
			this.caveConnections.forEach((searchPair) => {
				console.log("looking for", cave.name, searchPair);
				let nextCaveName = "";
				if (searchPair[0] === cave.name || searchPair[1] === cave.name) {
					if (searchPair[0] === cave.name) nextCaveName = searchPair[1];
					if (searchPair[1] === cave.name) nextCaveName = searchPair[0];

					let index = this.caveIsAlreadyVisited(path, nextCaveName);

					if (index > -1) {
						if (!path[index].visited) {
							path[index].visitCave();
							path.push(path[index]);
							return this.search(path[index], path);
						}
					} else {
						let nextCave = new Cave(nextCaveName);
						nextCave.visitCave();
						path.push(nextCave);
						return this.search(nextCave, path);
					}
				}
			});
		}
	}

	caveIsAlreadyVisited(path: Array<Cave>, name: string) {
		return path.findIndex((c) => c.name === name);
	}
}

// let paths: Array<Array<string>> = [];
// let caves: Array<Cave> = [];

// caveConnections.forEach((pair) => {
// 	let cave1 = new Cave(pair[0]);
// 	let cave2 = new Cave(pair[1]);

// 	if (caves.indexOf(cave1) != -1) {
// 		caves.push(cave1);
// 	}
// });

//console.log(caves);
