import fs from "fs";
import { readFileWithDirections } from "./Input/readFileWithDirections";
import { ProcessImage } from "./src/processImage";

let image;
let path;
const test = false;

if (test) {
	image = readFileWithDirections("testImage.txt", 50);
	path = __dirname + "/Input/" + "algo.txt";
} else {
	image = readFileWithDirections("image.txt", 100);
	path = __dirname + "/Input/" + "algo.txt";
}
const algorithm = fs
	.readFileSync(path, "utf8")
	.trim()
	.split("")
	.map((e) => (e === "#" ? 1 : 0));

let imageProcessor = new ProcessImage(image, algorithm);
console.log("Task 1: " + imageProcessor.iterate(2));
//imageProcessor.outputToFile();
console.log("Task 2: " + imageProcessor.iterate(48));
