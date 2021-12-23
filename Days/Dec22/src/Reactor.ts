import { Cube } from "./Cube";

export class Reactor {
	cubes: Cube[] = [];
	// removeCubes: Cube[] = [];
	totalVolume: number = 0;

	addCube(position: number[][]): void {
		let newCube = new Cube(position);
		let newCubeVolume = newCube.cubeVolume();

		this.totalVolume += newCubeVolume - this.overlapVolume(this.cubes, newCube);
		this.cubes.push(newCube);
	}

	overlapVolume(cubes: Cube[], cube: Cube): number {
		return cubes
			.map((c) => {
				let overlapCube = this.getIntersection(cube, c);
				if (overlapCube != undefined) {
					return (
						overlapCube.cubeVolume() -
						this.overlapVolume(cubes.slice(cubes.indexOf(c) + 1), overlapCube)
					);
				} else {
					return 0;
				}
			})
			.reduce((a, b) => a + b, 0);
	}

	addVacuum(position: number[][]): void {
		let vacuumCube = new Cube(position);
		this.cubes.push(vacuumCube);
	}

	getIntersection(newCube: Cube, existingCube: Cube): Cube | undefined {
		let xIntersection = this.intersectRanges(newCube.x, existingCube.x);
		let yIntersection = this.intersectRanges(newCube.y, existingCube.y);
		let zIntersection = this.intersectRanges(newCube.z, existingCube.z);
		if (
			xIntersection != undefined &&
			yIntersection != undefined &&
			zIntersection != undefined
		) {
			let intersectingCube = new Cube([
				xIntersection,
				yIntersection,
				zIntersection,
			]);
			return intersectingCube;
		} else return undefined;
	}

	intersectRanges(
		dimNew: { start: number; end: number },
		dimEx: { start: number; end: number }
	): any {
		let overlapStart: number;
		let overlapEnd: number;
		if (dimNew.start <= dimEx.end && dimNew.end >= dimEx.start) {
			overlapStart = Math.max(dimNew.start, dimEx.start);
			overlapEnd = Math.min(dimNew.end, dimEx.end);
			return [overlapStart, overlapEnd];
		} else return undefined;
	}

	// addVacuum
}
