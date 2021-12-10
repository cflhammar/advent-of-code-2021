import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { findLowPointRisk } from "./src/FindLowPointRisk";
import { FindBasins } from "./src/FindBasins";

const directions = readFileWithDirections("input.txt");

console.log("Task 1: ", findLowPointRisk(directions));

let basinFinder = new FindBasins(directions);
console.log("Task 2: ", basinFinder.getBasinSize());
