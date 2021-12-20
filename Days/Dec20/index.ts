import fs from "fs";
import { readImage, readAlgorithm } from "./Input/readInput";

import { ProcessImage } from "./src/processImage";

let image;
let algorithm;
const test = false;

if (test) {
	image = readImage("testImage.txt", 200);
	algorithm = readAlgorithm("testAlgo.txt");
} else {
	image = readImage("image.txt", 100);
	algorithm = readAlgorithm("algo.txt");
}

let imageProcessor = new ProcessImage(image, algorithm);
console.log("Task 1: " + imageProcessor.iterate(2));
console.log("Task 2: " + imageProcessor.iterate(48));

//imageProcessor.outputToFile();
