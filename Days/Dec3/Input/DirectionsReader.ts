import fs from "fs";

export class DirectionsReader {
	readFileWithDirections(fileName: string): Array<Array<string>> {
		const path = __dirname + "/" + fileName;
		return fs
			.readFileSync(path, "utf8")
			.split("\n")
			.map((direction) => direction.split(""));
	}
}
