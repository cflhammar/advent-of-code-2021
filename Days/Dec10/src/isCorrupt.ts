export function isCorrupt(row: Array<string>) {
	const matchChar = (popChar: string, stackChar: string): boolean => {
		if (popChar === "(" && stackChar === ")") return true;
		if (popChar === "[" && stackChar === "]") return true;
		if (popChar === "{" && stackChar === "}") return true;
		if (popChar === "<" && stackChar === ">") return true;
		else return false;
	};

	for (let i = 0; i < row.length; i++) {
		let stack: Array<string> = [];

		for (let k = 0; k < row.length; k++) {
			let char = row[k];

			if (char === "(" || char === "[" || char === "{" || char === "<") {
				stack.push(char);
			} else if (char === ")" || char === "]" || char === "}" || char === ">") {
				let popChar = stack.pop();
				if (!matchChar(popChar || "", char)) {
					return true;
				}
			}
		}
	}
	return false;
}
