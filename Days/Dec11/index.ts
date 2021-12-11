import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { OctopusGrid } from "./src/OctopusGrid";

const directions = readFileWithDirections("input.txt");

let octopusGrid = new OctopusGrid(directions);
octopusGrid.iterate(100);
console.log("Task 1: ", octopusGrid.totalFlashes);

octopusGrid = new OctopusGrid(directions);
console.log("Task 2: ", octopusGrid.iterateUntilAllFlash());
