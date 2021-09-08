import { IRule } from "./IRule";

export class DivisibleByThreeRule implements IRule {
  matches = (number: number) => {
    return number % 3 == 0;
  };
  word = "Fizz";
}
