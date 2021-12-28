import { readFileWithDirections } from "./Input/readFileWithDirections";
import { findScanners } from "./src/findScanners";

const directions = readFileWithDirections("input.txt");

findScanners(directions);
