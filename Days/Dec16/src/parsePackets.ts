import { Packet } from "./Packet";

export function parsePackets(
	input: string,
	totalSubPackets: number = -1
): { packets: Packet[]; consumed: number } {
	let packets: { packets: Packet[]; consumed: number } = {
		packets: [],
		consumed: 0,
	};
	let totalPackets: number = 0;
	const startInputSize = input.length;
	while (
		input.length > 0 &&
		(totalSubPackets < 0 || totalPackets < totalSubPackets)
	) {
		if (
			input.length ===
			input
				.split("")
				.filter((e) => e === "0")
				.join("").length
		) {
			break;
		}

		const version = parseInt(input.substring(0, 3), 2);
		const typeId = parseInt(input.substring(3, 6), 2);
		const packet = new Packet(version, typeId);
		totalPackets++;
		input = input.substring(6);

		//literal
		if (typeId === 4) {
			let binaryString = "";
			while (input[0] === "1") {
				binaryString += input.substring(1, 5);
				input = input.substring(5);
			}
			binaryString += input.substring(1, 5);
			input = input.substring(5);
			packet.literal = parseInt(binaryString, 2);
			//break;
		} else {
			const lenTypeId = input[0];
			input = input.substring(1);
			if (lenTypeId === "0") {
				const length = parseInt(input.substring(0, 15), 2);
				input = input.substring(15);

				const subPackets = input.substring(0, length);
				packet.packets = parsePackets(subPackets);
				input = input.substring(length);
			} else {
				const totalSubPackets = parseInt(input.substring(0, 11), 2);
				input = input.substring(11);

				packet.packets = parsePackets(input, totalSubPackets);
				//console.log(packet.packets.consumed);
				input = input.substring(packet.packets.consumed);
				//delete packet.packets.consumed;
			}

			switch (typeId) {
				case 0:
					packet.literal = packet.packets.packets.reduce(
						(a, b) => a + b.literal,
						0
					);
					break;
				case 1:
					packet.literal = packet.packets.packets.reduce(
						(a, b) => a * b.literal,
						1
					);
					break;
				case 2:
					packet.literal = Math.min(
						...packet.packets.packets.map((p) => p.literal)
					);
					break;
				case 3:
					packet.literal = Math.max(
						...packet.packets.packets.map((p) => p.literal)
					);
					break;
				case 5:
					packet.literal = Number(
						packet.packets.packets[0].literal >
							packet.packets.packets[1].literal
					);
					break;
				case 6:
					packet.literal = Number(
						packet.packets.packets[0].literal <
							packet.packets.packets[1].literal
					);
					break;
				case 7:
					packet.literal = Number(
						packet.packets.packets[0].literal ===
							packet.packets.packets[1].literal
					);
					break;
				default:
					break;
			}
		}
		//console.log(version, typeId, packet.literal);
		packets.packets.push(packet);
	}

	packets.consumed = startInputSize - input.length;
	//console.log(JSON.stringify(packets.packets, null, 2));

	return packets;
}
