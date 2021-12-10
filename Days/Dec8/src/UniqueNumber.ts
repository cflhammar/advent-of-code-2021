export function uniqueNumber(numbers: Array<Array<Array<string>>>) {
	let counter = 0;

	numbers.forEach((signalAndOutput) => {
		let signal = signalAndOutput[1];

		signal.forEach((sequence) => {
			if (numberIsKnown(sequence)) {
				counter++;
			}
		});
	});
	return counter;
}

const numberIsKnown = (sequence: string): boolean => {
	let len = sequence.length;
	return len === 2 || len === 3 || len === 4 || len === 7;
};
