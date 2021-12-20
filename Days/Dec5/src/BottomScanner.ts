import { BottomCoordinates } from "./BottomCoordinates";

export class BottomScanner {
	bottomCoordinates: BottomCoordinates;

	constructor(bottomCoordinates: BottomCoordinates) {
		this.bottomCoordinates = bottomCoordinates;
	}

	drawLines(linesToDraw: Array<Array<Array<string>>>) {
		for (let i = 0; i < linesToDraw.length; i++) {
			let point1 = linesToDraw[i][0];
			let point2 = linesToDraw[i][1];

			this.bottomCoordinates.drawLine(
				parseInt(point1[0]),
				parseInt(point1[1]),
				parseInt(point2[0]),
				parseInt(point2[1])
			);
		}
	}

	getNumberOfDangerousPoints() {
		return this.bottomCoordinates.getNumberOfDangerousPoints();
	}
}
