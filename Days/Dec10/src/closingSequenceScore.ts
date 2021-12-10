import { isCorrupt } from "./isCorrupt";

export function closingSequenceScore(directions: Array<Array<string>>) {
	let totalScore: Array<number> = [];
	directions.map((row) => {
		if (!isCorrupt(row)) {
			let stack: Array<string> = [];

			row.map((char) => {
				if (charIsOpening(char)) {
					stack.unshift(char);
				} else {
					stack.shift();
				}
			});
			let closingSequence = getClosingSequence(stack);

			let score = 0;
			closingSequence.split("").map((char) => {
				score = score * 5 + getPoint(char);
			});
			totalScore.push(score);
		}
	});

	return calculateTotalScore(totalScore);
}

const charIsOpening = (char: string): boolean => {
	return char === "(" || char === "[" || char === "{" || char === "<";
};

const getClosingChar = (char: string): string => {
	if (char === "(") return ")";
	if (char === "[") return "]";
	if (char === "{") return "}";
	if (char === "<") return ">";
	else return "";
};

const getPoint = (char: string): number => {
	if (char === ")") return 1;
	if (char === "]") return 2;
	if (char === "}") return 3;
	if (char === ">") return 4;
	else return 0;
};

const calculateTotalScore = (scores: Array<number>): number => {
	let totalScore = scores.sort(function (a, b) {
		return a - b;
	});
	return totalScore[(totalScore.length - 1) / 2];
};

const getClosingSequence = (stack: Array<string>): string => {
	let closingSequence = "";
	stack.map((char) => {
		closingSequence += getClosingChar(char);
	});
	return closingSequence;
};
