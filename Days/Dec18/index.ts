import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { part1 } from "./src/part1";
import { part2 } from "./src/part2";

const input = readFileWithDirections("inputTest.txt");

console.log("Task 1: " + part1(input));
console.log("Task 2: " + part2(input));
