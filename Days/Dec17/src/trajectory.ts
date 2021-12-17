export function trajectory(xVel: number, yVel: number): number[] {
	let currentX: number = 0;
	let currentY: number = 0;
	let maxY: number = 0;

	let targetX: number[] = [169, 206];
	let targetY: number[] = [-68, -108];

	const isWithinTarget = () => {
		return (
			currentX >= targetX[0] &&
			currentX <= targetX[1] &&
			currentY <= targetY[0] &&
			currentY >= targetY[1]
		);
	};

	const hasNotOverShoot = () => {
		return currentX < targetX[1] && currentY > targetY[1];
	};

	do {
		currentX += xVel;
		xVel = Math.max(xVel - 1, 0);
		currentY += yVel;
		yVel--;

		if (currentY > maxY) maxY = currentY;
		if (isWithinTarget()) {
			return [maxY, 1];
		}
	} while (hasNotOverShoot());
	return [0, 0];
}
