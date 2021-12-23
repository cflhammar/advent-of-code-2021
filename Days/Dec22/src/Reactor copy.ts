// import { Cube } from "./Cube";

// export class Reactor {
// 	litCubes: Cube[] = [];
// 	removeCubes: Cube[] = [];

// 	addCube(position: number[][]) {
// 		let newCube = new Cube(position);

// 		for (const existingCube of this.litCubes) {
// 			let overlapingCube = this.getIntersection(newCube, existingCube);

// 			if (overlapingCube != undefined) {
// 				// check that overlap is not off!
// 				// console.log(overlapingCube);

// 				for (const vacuumCube of existingCube.vacuum) {
// 					let overlappingCubeTurnedOff = this.getIntersection(
// 						overlapingCube,
// 						vacuumCube
// 					);
// 					// console.log(overlappingCubeTurnedOff);
// 					if (overlappingCubeTurnedOff != undefined) {
// 						let notOverlapingCube = this.getIntersection(
// 							overlappingCubeTurnedOff,
// 							overlapingCube
// 						);
// 						// console.log(notOverlapingCube);
// 						if (notOverlapingCube != undefined) {
// 							console.log("reset cube:");
// 							console.log(notOverlapingCube);
// 							this.cubes.push(notOverlapingCube);
// 						}
// 					}
// 				}
// 				newCube.overlap.push(overlapingCube);
// 			}
// 		}
// 		// console.log("----------");
// 		// console.log(JSON.stringify(this.cubes, null, 2));
// 		console.log("new cube:");
// 		console.log(newCube);
// 		this.cubes.push(newCube);
// 	}

// 	addVacuum(position: number[][]) {
// 		let vacuumCube = new Cube(position);

// 		for (const existingCube of this.cubes) {
// 			let overlapingCube = this.getIntersection(vacuumCube, existingCube);

// 			if (overlapingCube != undefined) {
// 				console.log("vacum:");

// 				existingCube.vacuum.push(overlapingCube);
// 				console.log(existingCube);
// 			}
// 		}
// 	}

// 	calculateVolume() {
// 		let volume = 0;
// 		for (const cube of this.cubes) {
// 			let totalCubeVolume =
// 				(cube.x.end - cube.x.start + 1) *
// 				(cube.y.end - cube.y.start + 1) *
// 				(cube.z.end - cube.z.start + 1);

// 			let overlapVolume = 0;
// 			for (const overlapCube of cube.overlap) {
// 				overlapVolume +=
// 					(overlapCube.x.end - overlapCube.x.start + 1) *
// 					(overlapCube.y.end - overlapCube.y.start + 1) *
// 					(overlapCube.z.end - overlapCube.z.start + 1);
// 			}
// 			let vacuumVolume = 0;
// 			for (const vacuumCube of cube.vacuum) {
// 				vacuumVolume +=
// 					(vacuumCube.x.end - vacuumCube.x.start + 1) *
// 					(vacuumCube.y.end - vacuumCube.y.start + 1) *
// 					(vacuumCube.z.end - vacuumCube.z.start + 1);
// 			}
// 			console.log(totalCubeVolume, overlapVolume, vacuumVolume);
// 			volume += totalCubeVolume - overlapVolume - vacuumVolume;
// 		}
// 		console.log(volume);
// 	}

// 	getIntersection(newCube: Cube, existingCube: Cube): any {
// 		let xIntersection = this.intersectRanges(newCube.x, existingCube.x);
// 		let yIntersection = this.intersectRanges(newCube.x, existingCube.x);
// 		let zIntersection = this.intersectRanges(newCube.x, existingCube.x);
// 		if (
// 			xIntersection != undefined &&
// 			xIntersection != undefined &&
// 			xIntersection != undefined
// 		) {
// 			let intersectingCube = new Cube([
// 				xIntersection,
// 				yIntersection,
// 				zIntersection,
// 			]);
// 			return intersectingCube;
// 		} else return undefined;
// 	}

// 	intersectRanges(
// 		dimNew: { start: number; end: number },
// 		dimEx: { start: number; end: number }
// 	): any {
// 		let overlapStart: number;
// 		let overlapEnd: number;
// 		if (dimNew.start <= dimEx.end && dimNew.end >= dimEx.start) {
// 			overlapStart = Math.max(dimNew.start, dimEx.start);
// 			overlapEnd = Math.min(dimNew.end, dimEx.end);
// 			return [overlapStart, overlapEnd];
// 		} else return undefined;
// 	}

// 	// addVacuum
// }
