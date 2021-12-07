import { input, testInput } from "./Input/inputTest";
import { CrabAligner } from "./src/CrabAligner";

let inputCrabPos = input;
let task = 2;

console.log("Task ", task, ", Fuel used: ", CrabAligner(inputCrabPos, task));
