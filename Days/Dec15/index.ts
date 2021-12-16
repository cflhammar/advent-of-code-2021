import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { dijsktra } from "./src/dijsktra";
import { unfoldCave } from "./src/unfoldCave";

const directions = readFileWithDirections("input.txt");
const unFoldedDirections = unfoldCave(directions);

console.log("Task1:" + dijsktra(directions));
console.log("Task2:" + dijsktra(unFoldedDirections));
