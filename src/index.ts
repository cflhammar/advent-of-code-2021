import { FizzBuzzer } from "./FizzBuzzer/FizzBuzzer";
import { DivisibleByFiveRule } from "./rules/DivisibleByFiveRule";
import { DivisibleByThreeRule } from "./rules/DivisibleByThreeRule";

const generateAnswers = (number: number, duration: number) => {
  const machine = new FizzBuzzer([
    new DivisibleByThreeRule(),
    new DivisibleByFiveRule(),
  ]);
  const oneSecond = 1000;

  setTimeout(() => {
    console.log(machine.answer(number));
    number++;
    if (number < duration) {
      generateAnswers(number, duration);
    }
  }, oneSecond);
};

generateAnswers(1, 1000);
