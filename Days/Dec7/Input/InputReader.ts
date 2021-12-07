import fs from "fs";

export class InputReader {
	readFileWithDirections(fileName: string): Array<Array<Array<string>>> {
		const path = __dirname + "/" + fileName;
		return fs
			.readFileSync(path, "utf8")
			.split("\n")
			.map((line) => line.split(" -> "))
			.map((row) => row.map((element) => element.split(",")));
	}
}
