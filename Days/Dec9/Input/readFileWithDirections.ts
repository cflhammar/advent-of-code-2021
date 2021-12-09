import fs from "fs";

export function readFileWithDirections(fileName: string): Array<Array<number>> {
	readFileWithDirections;
	const path = __dirname + "/" + fileName;
	const stringData = fs
		.readFileSync(path, "utf8")
		.split("\n")
		.map((line) => line.split(""));

	return stringData.map((row) => row.map((element) => parseInt(element)));
}
