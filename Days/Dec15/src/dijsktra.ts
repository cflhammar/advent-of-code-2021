import { Graph } from "./Graph";

export function dijsktra(input: string[][]) {
	let map = new Graph();
	for (let x = 0; x < input.length; x++) {
		for (let y = 0; y < input[0].length; y++) {
			map.addNode(x.toString() + "-" + y.toString());
		}
	}

	for (let x = 0; x < input.length; x++) {
		for (let y = 0; y < input[0].length; y++) {
			if (x + 1 >= 0 && x + 1 < input.length) {
				map.addEdge(
					x.toString() + "-" + y.toString(),
					(x + 1).toString() + "-" + y.toString(),
					parseInt(input[x + 1][y]),
					parseInt(input[x][y])
				);
			}
			if (x - 1 >= 0 && x - 1 < input.length) {
				map.addEdge(
					x.toString() + "-" + y.toString(),
					(x - 1).toString() + "-" + y.toString(),
					parseInt(input[x - 1][y]),
					parseInt(input[x][y])
				);
			}
			if (y + 1 >= 0 && y + 1 < input.length) {
				map.addEdge(
					x.toString() + "-" + y.toString(),
					x.toString() + "-" + (y + 1).toString(),
					parseInt(input[x][y + 1]),
					parseInt(input[x][y])
				);
			}
			if (y - 1 >= 0 && y - 1 < input.length) {
				map.addEdge(
					x.toString() + "-" + y.toString(),
					x.toString() + "-" + (y - 1).toString(),
					parseInt(input[x][y - 1]),
					parseInt(input[x][y])
				);
			}
		}
	}

	let finish =
		(input.length - 1).toString() + "-" + (input.length - 1).toString();

	return map.findPathWithDijkstra("0-0", finish);
}
