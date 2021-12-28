import fs from "fs";

export function readFileWithDirections(fileName: string): number[][][] {
	readFileWithDirections;
	const path = __dirname + "/" + fileName;
	let stringData = fs.readFileSync(path, "utf8").split("\n\n");

	let data = stringData
		.map((row) => row.split("\n"))
		.map((row) => row.map((e) => e.split(",")));

	let output = data.map((row) => row.map((e) => e.map((e) => parseInt(e))));

	return output;
}
