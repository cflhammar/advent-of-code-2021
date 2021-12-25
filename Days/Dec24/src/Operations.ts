export class Operations {
	add(a: number, b: number): number {
		return a + b;
	}
	div(a: number, b: number): number {
		return Math.trunc(a / b);
	}
	mul(a: number, b: number): number {
		if (a === 0 || b === 0) return 0;
		else return a * b;
	}
	eql(a: number, b: number): number {
		return Number(a === b);
	}
	mod(a: number, b: number): number {
		return a % b;
	}
}
