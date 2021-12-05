import { DirectionsReader } from "./Input/DirectionsReader";
import { GammaEpsilonDiagnostics } from "./src/GammaEpsilonDiagnostics";
import { OxygenDiagnostics } from "./src/OxygenDiagnostics";
import { CO2Diagnostics } from "./src/CO2Diagnostics";

const directionsReader = new DirectionsReader();
let directions = directionsReader.readFileWithDirections("input.txt");

const gammaEpsilonDiagnostics = new GammaEpsilonDiagnostics();
console.log(
	"Task 1: ",
	gammaEpsilonDiagnostics.calculateGammaEpsilon(directions)
);

directions = directionsReader.readFileWithDirections("input.txt");
const oxyDiagnostics = new OxygenDiagnostics();
const oxygen = oxyDiagnostics.calculateOxygen(directions);

directions = directionsReader.readFileWithDirections("input.txt");
const cO2Diagnostics = new CO2Diagnostics();
const co2 = cO2Diagnostics.calculateCO2(directions);

console.log("Task2: Oxygen:", oxygen);
console.log("Task: CO2", co2);
