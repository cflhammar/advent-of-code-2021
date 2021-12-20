import fs from "fs";

export function readFileWithDirections(
	fileName: string,
	padLen: number
): number[][] {
	const path = __dirname + "/" + fileName;
	let stringData = fs.readFileSync(path, "utf8").trim().split("\n");

	// console.log(stringData);
	stringData = stringData.map(
		(str) => ".".repeat(padLen) + str + ".".repeat(padLen)
	);
	// console.log(stringData);
	let arrayLen = stringData[0].length;
	let paddingString = ".".repeat(arrayLen);
	// console.log(paddingString);
	for (let x = 0; x < padLen; x++) {
		stringData.unshift(paddingString);
		stringData.push(paddingString);
	}
	// console.log(stringData);
	let binary = stringData.map((row) =>
		row.split("").map((e) => (e === "#" ? 1 : 0))
	);

	return binary;
}
