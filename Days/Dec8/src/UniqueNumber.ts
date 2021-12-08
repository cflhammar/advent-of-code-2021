export function uniqueNumber(numbers: Array<Array<Array<string>>>) {
	let counter = 0;
	let signal;
	for (let i = 0; i < numbers.length; i++) {
		signal = numbers[i][1];

		for (let k = 0; k < signal.length; k++) {
			if (
				signal[k].length === 2 ||
				signal[k].length === 3 ||
				signal[k].length === 4 ||
				signal[k].length === 7
			) {
				counter++;
			}
		}
	}
	return counter;
}
