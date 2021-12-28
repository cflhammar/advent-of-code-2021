export class Point {
	x: number;
	y: number;
	z: number;

	constructor(position: number[]) {
		this.x = position[0];
		this.y = position[1];
		this.z = position[2];
	}
}
