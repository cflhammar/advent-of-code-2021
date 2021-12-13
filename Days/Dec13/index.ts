import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { paperFold } from "./src/paperFold";
import { CaveSystem } from "./src/CaveSystem";

const directions = readFileWithDirections("input.txt");
console.log(paperFold(directions));
