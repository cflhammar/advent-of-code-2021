export class Packet {
	version: number;
	typeId: number;
	literal: number = 0;
	packets: { packets: Packet[]; consumed: number };

	constructor(version: number, typeId: number) {
		this.version = version;
		this.typeId = typeId;
		this.packets = { packets: [], consumed: 0 };
	}
}
