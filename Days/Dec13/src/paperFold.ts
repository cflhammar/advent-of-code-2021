import fs from "fs";

export function paperFold(input: Array<Array<string>>) {
	let numbers = input
		.filter((row) => row.length > 1)
		.map((e) => e.map((e) => parseInt(e)));
	let temp = input
		.filter((row) => row.length === 1 && row[0].length > 5)
		.map((e) => e.map((e) => e.split(" ")));

	let folds = temp.map((e) => e.map((e) => e[2].split("=")));

	numbers = foldX(655, numbers);
	numbers = foldY(447, numbers);
	numbers = foldX(327, numbers);
	numbers = foldY(223, numbers);
	numbers = foldX(163, numbers);
	numbers = foldY(111, numbers);
	numbers = foldX(81, numbers);
	numbers = foldY(55, numbers);
	numbers = foldX(40, numbers);
	numbers = foldY(27, numbers);
	numbers = foldY(13, numbers);
	numbers = foldY(6, numbers);

	return printPatternToFile(numbers);
}

const foldY = (row: number, paper: number[][]): number[][] => {
	let newPaper: Array<Array<number>> = [];
	for (let i = 0; i < paper.length; i++) {
		let yVal = paper[i][1];
		if (yVal > row) {
			let diff = paper[i][1] - row;
			newPaper.push([paper[i][0], row - diff]);
		} else if (yVal < row) {
			newPaper.push([paper[i][0], paper[i][1]]);
		}
	}
	return multiDimensionalUnique(newPaper);
};

const foldX = (col: number, paper: number[][]): number[][] => {
	let newPaper: Array<Array<number>> = [];
	for (let i = 0; i < paper.length; i++) {
		let xVal = paper[i][0];
		if (xVal > col) {
			let diff = paper[i][0] - col;
			newPaper.push([col - diff, paper[i][1]]);
		} else if (xVal < col) {
			newPaper.push([paper[i][0], paper[i][1]]);
		}
	}
	return multiDimensionalUnique(newPaper);
};

const printPatternToFile = (paper: number[][]) => {
	let coordinates: string[][] = [];
	for (let x = 0; x < 10; x++) {
		coordinates[x] = [];
		for (let y = 0; y < 50; y++) {
			coordinates[x][y] = ",";
		}
	}

	for (let i = 0; i < paper.length; i++) {
		coordinates[paper[i][1]][paper[i][0]] = "0";
	}
	coordinates.forEach((row) =>
		fs.writeFileSync("output.txt", row + "\n", { flag: "a" })
	);
};

function multiDimensionalUnique(arr: number[][]) {
	var uniques: number[][] = [];
	var itemsFound: any = {};
	for (var i = 0, l = arr.length; i < l; i++) {
		var stringified = JSON.stringify(arr[i]);
		if (itemsFound[stringified]) {
			continue;
		}
		uniques.push(arr[i]);
		itemsFound[stringified] = true;
	}
	return uniques;
}
