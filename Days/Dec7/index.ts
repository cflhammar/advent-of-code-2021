import { input, testInput } from "./Input/inputTest";
import { CrabAligner } from "./src/CrabAligner";

let inputCrabPos = input;
let task = 2;

console.log("Fuel used: ", CrabAligner(inputCrabPos, task));
