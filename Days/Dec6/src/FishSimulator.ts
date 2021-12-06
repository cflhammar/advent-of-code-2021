import { FishStim } from "./FishStim";

export function FishSimulator(fishStim: FishStim, days: number) {
	for (let day = 0; day < days; day++) {
		fishStim.nextDay();
	}
	return fishStim.size();
}
