import { trajectory } from "./src/trajectory";

let maxHeight: number = 0;
let sum: number = 0;
for (let x = 0; x < 1000; x++) {
	for (let y = -1000; y < 1000; y++) {
		const [height, i] = trajectory(x, y);
		if (height > maxHeight) maxHeight = height;
		sum += i;
	}
}

console.log("Task 1: " + maxHeight);
console.log("Task 2: " + sum);
