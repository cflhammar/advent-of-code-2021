export function increasingSlidingDepth(input: number[]): number {
	let counter = 0;
	for (let i = 0; i < input.length; i++) {
		let currentDepth = input[i] + input[i + 1] + input[i + 2];
		let nextDepth = input[i + 1] + input[i + 2] + input[i + 3];

		if (nextDepth > currentDepth) counter++;
		if (input.length - i < 3) break;
	}
	return counter;
}
