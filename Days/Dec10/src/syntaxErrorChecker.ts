export function syntaxErrorChecker(directions: Array<Array<string>>) {
	let errorScore = 0;
	directions.map((row) => {
		let stack: Array<string> = [];

		for (let k = 0; k < row.length; k++) {
			let char = row[k];

			if (charIsOpening(char)) {
				stack.push(char);
			} else {
				let popChar = stack.pop() || "";
				if (!charIsMatching(popChar, char)) {
					errorScore += getScore(char);
					break;
				}
			}
		}
	});
	return errorScore;
}

const charIsOpening = (char: string): boolean => {
	return char === "(" || char === "[" || char === "{" || char === "<";
};

const charIsMatching = (popChar: string, stackChar: string): boolean => {
	if (popChar === "(" && stackChar === ")") return true;
	if (popChar === "[" && stackChar === "]") return true;
	if (popChar === "{" && stackChar === "}") return true;
	if (popChar === "<" && stackChar === ">") return true;
	else return false;
};

const getScore = (char: string) => {
	if (char === ")") return 3;
	if (char === "]") return 57;
	if (char === "}") return 1197;
	if (char === ">") return 25137;
	else return 0;
};
