import { DirectionsReader } from "./Input/DirectionsReader";
import { increasingDepth } from "./src/increasingDepth";
import { increasingSlidingDepth } from "./src/increasingSlidingDepth";

const directionsReader = new DirectionsReader();
const directions =
	directionsReader.readFileWithDirections("../Input/input.txt");

console.log(directions);

console.log("Task1: ", increasingDepth(directions));
console.log("Task2: ", increasingSlidingDepth(directions));
