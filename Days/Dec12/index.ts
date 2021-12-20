import { readFileWithDirections } from "./Input/ReadFileWithDirections";
import { CaveExplorer } from "./src/CaveExplorer";
import { CaveSystem } from "./src/CaveSystem";

const directions = readFileWithDirections("inputTest.txt");

const caveSystem = new CaveSystem(directions);
const num = caveSystem.getNumberOfCaves();
console.log(num);
