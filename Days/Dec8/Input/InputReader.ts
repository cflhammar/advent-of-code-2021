import fs from "fs";

export class InputReader {
	readFileWithDirections(fileName: string): Array<Array<Array<string>>> {
		const path = __dirname + "/" + fileName;
		return fs
			.readFileSync(path, "utf8")
			.split("\n")
			.map((line) => line.split(" | "))
			.map((row) => row.map((bow) => bow.split(" ")));

		//	const signal = rows.map((row) => row[0].split(" "));
		//const output = rows.map((row) => row[1].split(" "));
		//	return [signal, output];
	}
}
