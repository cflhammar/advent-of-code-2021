import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { syntaxErrorChecker } from "./src/syntaxErrorChecker";
import { closingSequenceScore } from "./src/closingSequenceScore";

const directions = readFileWithDirections("input.txt");

console.log("Task 1: ", syntaxErrorChecker(directions));
console.log("Task 2: ", closingSequenceScore(directions));
