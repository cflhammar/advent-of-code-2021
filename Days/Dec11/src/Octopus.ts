export class Octopus {
	value: number;
	flashed: boolean;

	constructor(value: number) {
		this.value = value;
		this.flashed = false;
	}

	flash() {
		this.flashed = true;
		this.value = 10;
	}

	reset() {
		this.flashed = false;
		if (this.value === 10) this.value = 0;
	}

	increase() {
		if (this.value < 10) this.value++;
	}
}
