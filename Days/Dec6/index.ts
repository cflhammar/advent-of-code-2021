import { fishInput } from "./Input/inputTest";
import { fishTestInput } from "./Input/inputTest";
import { FishSimulator } from "./src/FishSimulator";
import { FishStim } from "./src/FishStim";

const numberOfDays = 256;
const startingFish = fishInput;

console.log(
	"Number of fish after " + numberOfDays + " days: ",
	FishSimulator(new FishStim(startingFish), numberOfDays)
);
