import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { PolymerCreator } from "./src/PolymerCreator";

const directions = readFileWithDirections("input.txt");

let polyCreator = new PolymerCreator(directions);
polyCreator.iterate(40);
