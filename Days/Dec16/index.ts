import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { Packet } from "./src/Packet";
import { parsePackets } from "./src/parsePackets";

const directions = readFileWithDirections("input.txt");

function part1(input: string) {
	const binary = [...input]
		.map((n) => parseInt(n, 16).toString(2).padStart(4, "0"))
		.join("");
	//	console.log(binary);
	const packets = parsePackets(binary);
	//	console.log(JSON.stringify(packets, null, 2));
	return sumpackets(packets.packets);
}

const sumpackets = (packets: Packet[]): number => {
	return packets
		.map((p: Packet) => p.version + sumpackets(p.packets.packets))
		.reduce((a, b) => a + b, 0);
};

// console.log(part1("D2FE28"), 6);
// console.log(part1("38006F45291200"), 9);
// console.log(part1("8A004A801A8002F478"), 16);
// console.log(part1("620080001611562C8802118E34"), 12);
// console.log(part1("C0015000016115A2E0802F182340"), 23);
// console.log(part1("A0016C880162017C3686B18A3D4780"), 31);
// console.log(part1("A0016C880162017C3686B18A3D4780"), 31);
// console.log(part1(directions));

function part2(input: string) {
	const binary = [...input]
		.map((n) => parseInt(n, 16).toString(2).padStart(4, "0"))
		.join("");
	const packets = parsePackets(binary);
	//console.log(JSON.stringify(packets.packets, null, 2));
	return packets.packets[0].literal;
}

//console.log(part2("C200B40A82"), 3);
//console.log(part2("04005AC33890"), 54);
//console.log(part2("880086C3E88112"), 7);
//console.log(part2("CE00C43D881120"), 9);
// console.log(part2("D8005AC2A8F0"), 1);
// console.log(part2("F600BC2D8F"), 0);
// console.log(part2("9C005AC2F8F0"), 0);
// console.log(part2("9C0141080250320F1802104A08"), 1);

console.log(part2(directions));
