import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { part1 } from "./src/part1";
import { part2 } from "./src/part2";

const input = readFileWithDirections("input.txt");

console.log("Task 1: " + part1(input) + " (4641)");
console.log("Task 2: " + part2(input) + " (4624)");
