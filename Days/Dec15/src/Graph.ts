import { PriorityQueue } from "./PriorityQueue";

export class Graph {
	nodes: string[] = [];
	adjacencyList: any = {};

	addNode(node: string) {
		this.nodes.push(node);
		this.adjacencyList[node] = [];
	}

	addEdge(node1: string, node2: string, weight1: number, weight2: number) {
		let objs = this.adjacencyList[node1].map((e: any) => e.node);
		if (objs.filter((n: string) => n === node2).length < 1) {
			//		if (!this.adjacencyList[node1].indexOf(node2)) {
			this.adjacencyList[node1].push({ node: node2, weight: weight1 });
			this.adjacencyList[node2].push({ node: node1, weight: weight2 });
		}
	}

	findPathWithDijkstra(startNode: string, endNode: string) {
		let times: any = {};
		let backtrace: any = {};
		let pq = new PriorityQueue();
		times[startNode] = 0;

		this.nodes.forEach((node) => {
			if (node !== startNode) {
				times[node] = Infinity;
			}
		});
		pq.enqueue([startNode, 0]);
		while (!pq.isEmpty()) {
			let shortestStep = pq.dequeue();
			let currentNode = shortestStep[0];
			this.adjacencyList[currentNode].forEach((neighbor: any) => {
				let time = times[currentNode] + neighbor.weight;
				if (time < times[neighbor.node]) {
					times[neighbor.node] = time;
					backtrace[neighbor.node] = currentNode;
					pq.enqueue([neighbor.node, time]);
				}
			});
		}
		let path: string[] = [endNode];
		let lastStep: string = endNode;
		while (lastStep !== startNode) {
			path.unshift(backtrace[lastStep]);
			lastStep = backtrace[lastStep];
		}

		return times[endNode];
	}
}
