import { Point } from "./Point";

export class Scanner {
	id: number = 0;
	beacons: Point[] = [];
	knownPosition?: Point;

	constructor(id: number) {
		this.id = id;
	}

	addPointFromPosition(position: number[]) {
		let point = new Point(position);
		this.beacons.push(point);
	}

	addPoint(point: Point) {
		for (const beacon of this.beacons) {
			if (
				beacon.x === point.x &&
				beacon.y === point.y &&
				beacon.z === point.z
			) {
				return;
			}
		}
		this.beacons.push(point);
	}

	adjust(rotate: (p: Point) => Point, shift: Point): void {
		this.beacons = this.beacons.map((p) => {
			let rotated: Point = rotate(p);
			let shifted = new Point([
				rotated.x + shift.x,
				rotated.y + shift.y,
				rotated.z + shift.z,
			]);
			return shifted;
		});
	}
}
