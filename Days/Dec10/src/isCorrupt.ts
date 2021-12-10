export function isCorrupt(row: Array<string>) {
	let stack: Array<string> = [];

	for (let k = 0; k < row.length; k++) {
		let char = row[k];

		if (charIsOpening(char)) {
			stack.push(char);
		} else {
			let popChar = stack.pop() || "";
			if (!charIsMatching(popChar, char)) {
				return true;
			}
		}
	}
	return false;
}

const charIsOpening = (char: string): boolean => {
	return char === "(" || char === "[" || char === "{" || char === "<";
};

const charIsMatching = (popChar: string, stackChar: string): boolean => {
	if (popChar === "(" && stackChar === ")") return true;
	else if (popChar === "[" && stackChar === "]") return true;
	else if (popChar === "{" && stackChar === "}") return true;
	else if (popChar === "<" && stackChar === ">") return true;
	else return false;
};
