interface Pair {
	pair: string;
	val: number;
}

export class PolymerCreator {
	polymer: any = {};
	insertionRules: string[][];
	input: string;

	constructor(input: Array<Array<string>>) {
		this.input = input[0][0];
		this.iniatePolymer(input[0][0]);
		input.shift();
		input.shift();
		this.insertionRules = input;
	}

	iniatePolymer(input: string) {
		for (let i = 0; i < input.length - 1; i++) {
			let pair: string = input[i] + input[i + 1];
			if (pair in this.polymer) this.polymer[pair]++;
			else this.polymer[pair] = 1;
		}
	}

	next() {
		let newPolymer: any = {};
		for (let [pair, val] of Object.entries(this.polymer)) {
			for (let k = 0; k < this.insertionRules.length; k++) {
				if (this.insertionRules[k][0] === pair) {
					let newPair1 = pair[0] + this.insertionRules[k][1];
					let newPair2 = this.insertionRules[k][1] + pair[1];

					if (newPair1 in newPolymer) {
						newPolymer[newPair1] += val;
					} else newPolymer[newPair1] = val;

					if (newPair2 in newPolymer) {
						newPolymer[newPair2] += val;
					} else newPolymer[newPair2] = val;
				}
			}
		}
		return newPolymer;
	}

	iterate(num: number) {
		for (let i = 0; i < num; i++) {
			this.polymer = this.next();
		}
		this.countPolymerPoints();
	}

	countPolymerPoints() {
		let counter: any = {};

		for (const [pair, value] of Object.entries(this.polymer)) {
			counter[pair[0]] = 0;
		}

		for (const [pair, value] of Object.entries(this.polymer)) {
			counter[pair[0]] += value;
		}

		counter[this.input[this.input.length - 1]]++;

		console.log(counter);

		let values: number[] = Object.values(counter);

		let max = Math.max(...values);
		let min = Math.min(...values);
		console.log(max, min, max - min);
	}

	getMax = function (str: string) {
		var max = 0,
			maxChar = "";
		str.split("").forEach(function (char) {
			if (str.split(char).length > max) {
				max = str.split(char).length;
				maxChar = char;
			}
		});
		return maxChar;
	};

	getMin = function (str: string) {
		var max = 999,
			maxChar = "";
		str.split("").forEach(function (char) {
			if (str.split(char).length < max) {
				max = str.split(char).length;
				maxChar = char;
			}
		});
		return maxChar;
	};
}
