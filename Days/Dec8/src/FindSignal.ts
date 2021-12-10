export function findSignal(input: Array<Array<Array<string>>>) {
	let outputs: Array<number> = [];
	let patternArray: Array<string>;
	let _235: Array<string>;
	let _069: Array<string>;

	input.map((line) => {
		let signal = line[0];
		let output = line[1];

		patternArray = [];
		_235 = [];
		_069 = [];

		signal.map((pattern) => {
			if (pattern.length === 2) patternArray[1] = pattern;
			if (pattern.length === 3) patternArray[7] = pattern;
			if (pattern.length === 4) patternArray[4] = pattern;
			if (pattern.length === 7) patternArray[8] = pattern;
			if (pattern.length === 5) _235.push(pattern);
			if (pattern.length === 6) _069.push(pattern);
		});

		_069.forEach((pattern) => {
			if (overlap(pattern, patternArray[4]) === 4) patternArray[9] = pattern;
			else if (overlap(pattern, patternArray[1]) === 2)
				patternArray[0] = pattern;
			else patternArray[6] = pattern;
		});

		_235.forEach((pattern) => {
			if (overlap(pattern, patternArray[1]) === 2) patternArray[3] = pattern;
			else if (overlap(pattern, patternArray[4]) === 3)
				patternArray[5] = pattern;
			else patternArray[2] = pattern;
		});

		let outputNumber = "";
		output.forEach((outputPattern) => {
			for (let i = 0; i < patternArray.length; i++) {
				if (
					overlap(outputPattern, patternArray[i]) === patternArray[i].length &&
					patternArray[i].length === outputPattern.length
				) {
					outputNumber += i;
				}
			}
		});
		outputs.push(parseInt(outputNumber));
	});
	return outputs.reduce(function (a, b) {
		return a + b;
	}, 0);
}

const overlap = (string1: string, string2: string) => {
	let array1 = string1.split("");
	let array2 = string2.split("");
	return array1.filter((value) => array2.includes(value)).length;
};
