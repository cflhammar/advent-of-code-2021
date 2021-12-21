import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { paperFold } from "./src/paperFold";

const directions = readFileWithDirections("input.txt");
paperFold(directions);
console.log("CHECK OUTPUT FILE!");
