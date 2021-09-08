import { IRule } from "./IRule";

export class DivisibleByFiveRule implements IRule {
  matches = (number: number) => {
    return number % 5 == 0;
  };
  word = "Buzz";
}
