import fs from "fs";
import { BingoBoardNumber } from "../src/BingoBoardNumber";

export class BingoBoardReader {
	readFileWithDirections(
		fileName: string
	): Array<Array<Array<BingoBoardNumber>>> {
		const path = __dirname + "/" + fileName;
		let bingoBoards = fs
			.readFileSync(path, "utf8")
			.split("\n\n")
			.map((board) => board.split("\n"))
			.map((row) => row.map((w) => w.replace(/\s+/g, " ").trim().split(" ")));

		return bingoBoards.map((board) =>
			board.map((row) =>
				row.map((number) => new BingoBoardNumber(parseInt(number)))
			)
		);
	}
}
