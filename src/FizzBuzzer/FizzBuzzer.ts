import { IRule } from "../rules/IRule";

export class FizzBuzzer {
  answer = (number: number): string => {
    let answer = "";
    if (number % 3 == 0) {
      answer += "Fizz";
    }
    if (number % 5 == 0) {
      answer += "Buzz";
    }
    return answer.length > 0 ? answer : number.toString();
  };
}
