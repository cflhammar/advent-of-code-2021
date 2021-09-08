import { IRule } from "../rules/IRule";

export class FizzBuzzer {
  rules: IRule[];
  constructor(_rules: IRule[]) {
    this.rules = _rules;
  }
  answer = (number: number): string => {
    const words: string[] = this.rules
      .filter((rule) => rule.matches(number))
      .map((rule) => rule.word);

    if (words.length > 0) {
      return words.join("");
    } else {
      return number.toString();
    }
  };
}
