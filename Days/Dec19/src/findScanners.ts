import { Point } from "./Point";
import { rotations } from "./Rotations";
import { Scanner } from "./Scanner";

export function findScanners(input: number[][][]) {
	let knownScannerIds: number[] = [];
	let scanners: Scanner[] = populateScanners(input);

	const baseScanner = scanners[0];
	while (knownScannerIds.length < scanners.length - 1) {
		for (let i = 1; i < scanners.length; i++) {
			const targetScanner = scanners[i];
			const scannerId = targetScanner.id;

			if (knownScannerIds.includes(scannerId)) {
				continue;
			}

			let found = false;
			for (const rotation of rotations) {
				if (found) break;

				const targetBeacons = targetScanner.beacons.map((p) => rotation(p));
				const distances = new Map();

				for (const baseBeacon of baseScanner.beacons) {
					if (found) break;

					for (const targetBeacon of targetBeacons) {
						const distance = pointDistance(baseBeacon, targetBeacon);
						const identifier = JSON.stringify(distance);

						if (distances.has(identifier)) {
							distances.set(identifier, distances.get(identifier) + 1);
						} else {
							distances.set(identifier, 1);
						}

						if (distances.get(identifier) >= 12) {
							targetScanner.adjust(rotation, distance);
							targetScanner.beacons.forEach((p) => baseScanner.addPoint(p));
							targetScanner.knownPosition = JSON.parse(identifier);
							knownScannerIds.push(scannerId);
							found = true;
							break;
						}
					}
				}
			}
		}
	}
	console.log("Task 1: " + baseScanner.beacons.length);
	console.log("Task 2: " + longestManhattanDist(scanners));
}

const pointDistance = (point1: Point, point2: Point) => {
	return {
		x: point1.x - point2.x,
		y: point1.y - point2.y,
		z: point1.z - point2.z,
	};
};

const longestManhattanDist = (scanners: Scanner[]) => {
	let longestDistance = 0;
	scanners.forEach((scanner1) => {
		scanners.forEach((scanner2) => {
			if (
				scanner1.knownPosition != undefined &&
				scanner2.knownPosition != undefined &&
				scanner1.id != scanner2.id
			) {
				let manhattanDist =
					Math.abs(scanner2.knownPosition.x - scanner1.knownPosition.x) +
					Math.abs(scanner2.knownPosition.y - scanner1.knownPosition.y) +
					Math.abs(scanner2.knownPosition.z - scanner1.knownPosition.z);
				if (manhattanDist > longestDistance) longestDistance = manhattanDist;
			}
		});
	});
	return longestDistance;
};

const populateScanners = (input: number[][][]) => {
	let scanners: Scanner[] = [];
	input.forEach((scannerPositions, id) => {
		let scanner = new Scanner(id);
		scannerPositions.forEach((position, x) => {
			if (x > 0) {
				scanner.addPointFromPosition(position);
			}
		});
		scanners.push(scanner);
	});
	return scanners;
};
