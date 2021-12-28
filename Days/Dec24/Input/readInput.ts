import fs from "fs";

export function readInput(fileName: string): any {
	const path = __dirname + "/" + fileName;
	let stringData = fs.readFileSync(path, "utf8").trim().split("\n");

	let data: any = stringData.map((e: any) => e.split(" "));

	return data;
}
