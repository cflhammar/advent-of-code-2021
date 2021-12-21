import { DiracDice } from "./src/DiracDice";
import { QuantumDice } from "./src/QuantumDice";

const startingPositions = [9, 10];

let diracDice = new DiracDice(startingPositions);
console.log("Task 1: " + diracDice.playUntilScore(1000));

let quantumDice = new QuantumDice(startingPositions);
console.log("Task 2: " + quantumDice.playUntilScore(21));
