import { DirectionsReader } from "./Input/DirectionsReader";
import { Submarine1 } from "./src/Submarine1";
import { Submarine2 } from "./src/Submarine2";

const directionsReader = new DirectionsReader();
const directions =
	directionsReader.readFileWithDirections("../Input/input.txt");

const submarine1 = new Submarine1();
console.log("Task1: ", submarine1.calculate(directions));

const submarine2 = new Submarine2();
console.log("Task2: ", submarine2.calculate(directions));
