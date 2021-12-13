import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { paperFold } from "./src/paperFold";

const directions = readFileWithDirections("input.txt");
console.log(paperFold(directions));
