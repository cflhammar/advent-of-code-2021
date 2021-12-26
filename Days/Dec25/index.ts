import { readInput } from "./Input/readInput";
import { SeaBottom } from "./src/SeaBottom";

let input = readInput("input.txt");

let seaBottom = new SeaBottom(input);
console.log("Task 1: ", seaBottom.moveUntilStop());
