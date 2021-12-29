export function increasingDepth(input: number[]): number {
	let counter = 0;
	for (let i = 0; i < input.length - 1; i++) {
		let currentDepth = input[i];
		let nextDepth = input[i + 1];
		if (nextDepth > currentDepth) counter++;
	}
	return counter;
}
