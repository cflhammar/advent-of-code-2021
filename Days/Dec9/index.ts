import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { findLowPointRisk } from "./src/FindLowPointRisk";
import { findBasin } from "./src/FindBasin";

const directions = readFileWithDirections("input.txt");

console.log("Task 1: ", findLowPointRisk(directions));
console.log("Task 2: ", findBasin(directions));
