import { DiracDice } from "./src/DiracDice";
import { QuantumDice } from "./src/QuantumDice";

const startingPositions = [9, 10];
// const startingPositions = [4, 8];

let diracDice = new DiracDice(startingPositions);
//console.log("Task1: " + diracDice.playUntilScore(1000));

let quantumDice = new QuantumDice();
//console.log(quantumDice.possibleRollSums);
