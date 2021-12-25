import { ALU } from "./ALU";

export function findMONAD(instructions: any) {
	let tryNumber = 99999999999999;

	while (true) {
		tryNumber--;
		if (!fulfillReq(tryNumber.toString())) continue;

		let tryNumberAsString = tryNumber.toString();
		if (tryNumberAsString.includes("0")) continue;
		else {
			// console.log(tryNumber);
			let aluProgram = new ALU(tryNumberAsString, instructions);
			aluProgram.process();
			if (aluProgram.isValid()) {
				break;
			}
		}
		// break;
	}
	console.log(tryNumber);
}

const fulfillReq = (n: string) => {
	if (parseInt(n[4]) != parseInt(n[3]) + 4) return false;
	else if (parseInt(n[7]) != parseInt(n[6]) - 6) return false;
	else if (parseInt(n[8]) != parseInt(n[5]) - 5) return false;
	else if (parseInt(n[9]) != parseInt(n[2]) - 7) return false;
	else if (parseInt(n[10]) != parseInt(n[1]) + 6) return false;
	else if (parseInt(n[12]) != parseInt(n[11]) + 1) return false;
	else if (parseInt(n[13]) != parseInt(n[0])) return false;
	else return true;
};
