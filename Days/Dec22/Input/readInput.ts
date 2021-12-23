import fs from "fs";

export function readInput(fileName: string): any {
	const path = __dirname + "/" + fileName;
	let stringData = fs.readFileSync(path, "utf8").trim().split("\n");

	let data: any = stringData
		.map((e: any) => e.split(" "))
		.map((e: any) => e.map((e: any) => e.split(",")))
		.map((e: any) => e.map((e: any) => e.map((e: any) => e.split(".."))));

	data.forEach((row: any, k: any) => {
		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				data[k][i][0] = data[k][i][0].includes("on") ? 1 : 0;
			} else {
				for (let x = 0; x < 3; x++) {
					data[k][i][x][0] = data[k][i][x][0].replace("x=", "");
					data[k][i][x][0] = data[k][i][x][0].replace("y=", "");
					data[k][i][x][0] = data[k][i][x][0].replace("z=", "");
					data[k][i][x][0] = parseInt(data[k][i][x][0]);
					data[k][i][x][1] = parseInt(data[k][i][x][1]);
				}
			}
		}
	});

	return data;
}
