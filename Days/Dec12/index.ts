import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { CaveSystem } from "./src/CaveSystem";

const directions = readFileWithDirections("input.txt");

const caveSystem = new CaveSystem(directions);
console.log("Task 1: ", caveSystem.getNumberOfCaves(1));
console.log("Task 2: ", caveSystem.getNumberOfCaves(2));
