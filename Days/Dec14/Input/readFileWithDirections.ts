import fs from "fs";

export function readFileWithDirections(fileName: string): Array<Array<string>> {
	readFileWithDirections;
	const path = __dirname + "/" + fileName;
	let stringData = fs
		.readFileSync(path, "utf8")
		.split("\n")
		.map((line) => line.split(" -> "));

	return stringData;
}
