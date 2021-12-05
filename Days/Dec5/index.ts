import { BottomCoordinates } from "./src/BottomCoordinates";
import { BottomScanner } from "./src/BottomScanner";
import { InputReader } from "./Input/InputReader";

const directionsReader = new InputReader();

const directions = directionsReader.readFileWithDirections("input.txt");

const bottomCoordinates = new BottomCoordinates(1000);
const bottomScanner = new BottomScanner(bottomCoordinates);
bottomScanner.drawLines(directions);
console.log("Task 2: ", bottomScanner.getNumberOfDangerousPoints());
