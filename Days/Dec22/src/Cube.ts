export class Cube {
	x: { start: number; end: number };
	y: { start: number; end: number };
	z: { start: number; end: number };

	constructor(position: number[][]) {
		this.x = { start: position[0][0], end: position[0][1] };
		this.y = { start: position[1][0], end: position[1][1] };
		this.z = { start: position[2][0], end: position[2][1] };
	}

	cubeVolume() {
		return (
			(this.x.end - this.x.start + 1) *
			(this.y.end - this.y.start + 1) *
			(this.z.end - this.z.start + 1)
		);
	}
}
