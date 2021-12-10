import { InputReader } from "./Input/InputReader";
import { uniqueNumber } from "./src/UniqueNumber";
import { findSignal } from "./src/FindSignal";

const directionsReader = new InputReader();

const directions = directionsReader.readFileWithDirections("input.txt");

console.log("Task 1: ", uniqueNumber(directions));
console.log("Task 2: ", findSignal(directions));
