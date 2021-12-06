export class FishStim {
	fishStim: Array<number>;

	constructor(fishStimInput: Array<number>) {
		this.fishStim = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (let i = 0; i < fishStimInput.length; i++) {
			this.fishStim[fishStimInput[i]]++;
		}
	}

	size(): number {
		return this.fishStim.reduce((a, b) => a + b, 0);
	}

	nextDay(): void {
		let nextFishStim = [0, 0, 0, 0, 0, 0, 0, 0, 0];

		for (let i = this.fishStim.length - 1; i > 0; i--) {
			if (i === 7) {
				nextFishStim[i - 1] = this.fishStim[i] + this.fishStim[0];
			} else {
				nextFishStim[i - 1] = this.fishStim[i];
			}
		}
		nextFishStim[8] = this.fishStim[0];
		this.fishStim = nextFishStim;
	}
}
