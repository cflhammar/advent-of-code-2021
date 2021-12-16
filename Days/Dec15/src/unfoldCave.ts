import fs from "fs";

export function unfoldCave(input: string[][]): string[][] {
	let inputInt = input.map((row) => row.map((e) => parseInt(e)));

	const increaseBy = (inputInt: number[][], num: number) => {
		for (let i = 0; i < num; i++) {
			inputInt = inputInt.map((row) => row.map((e) => (e === 9 ? 1 : e + 1)));
		}
		return inputInt;
	};

	let arrays: any = {};
	for (let i = 0; i < 9; i++) {
		arrays[i] = increaseBy(inputInt, i);
	}

	let pillars: any = {};
	for (let i = 1; i < 6; i++) {
		pillars[i] = [
			...arrays[i - 1],
			...arrays[i],
			...arrays[i + 1],
			...arrays[i + 2],
			...arrays[i + 3],
		];
	}
	let matrix: number[][] = [];

	for (let row = 0; row < pillars[1].length; row++) {
		let r: any = [];
		for (let pil = 1; pil < 6; pil++) {
			r = [...r, pillars[pil][row]];
		}
		matrix.push(r.flat());
	}

	return matrix.map((row) => row.map((e: number) => e.toString()));
}
