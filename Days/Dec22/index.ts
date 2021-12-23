import { readInput } from "./Input/readInput";
import { handleReactor } from "./src/handleReactor";

let input = readInput("input.txt");
let input2 = readInput("input2.txt");

console.log("Task1:", handleReactor(input));
console.log("Task2: ", handleReactor(input2));
