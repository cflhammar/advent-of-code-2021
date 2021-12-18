import fs from "fs";

export function readFileWithDirections(fileName: string): string {
	readFileWithDirections;
	const path = __dirname + "/" + fileName;
	let stringData = fs.readFileSync(path, "utf8").trim();

	return stringData;
}
