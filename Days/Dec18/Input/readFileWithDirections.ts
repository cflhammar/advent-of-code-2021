import fs from "fs";

export function readFileWithDirections(fileName: string): number[][] {
	readFileWithDirections;
	const path = __dirname + "/" + fileName;
	let stringData = fs
		.readFileSync(path, "utf8")
		.split("\n")
		.map((e) => JSON.parse(e));

	return stringData;
}
