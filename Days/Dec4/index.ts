import { BingoBoardReader } from "./Input/BingoBoardReader";
import { Bingo } from "./src/Bingo";
import { BingoBoard } from "./src/BingoBoard";
import { numbersToPlay } from "./Input/NumbersToPlay";

const directionsReader = new BingoBoardReader();
const bingoBoardsInput = directionsReader.readFileWithDirections("input.txt");

let bingoboards = bingoBoardsInput.map((board) => new BingoBoard(board));

const bingoGame = new Bingo(bingoboards);
numbersToPlay.map((number) => bingoGame.pullNewNumber(number));
