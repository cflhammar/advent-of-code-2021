import { FizzBuzzer } from "../FizzBuzzer/FizzBuzzer";
import { DivisibleByFiveRule } from "../rules/DivisibleByFiveRule";
import { DivisibleByThreeRule } from "../rules/DivisibleByThreeRule";

describe("Divisible by five rule", () => {
  let fizzBuzzer: FizzBuzzer;

  beforeEach(() => {
    fizzBuzzer = new FizzBuzzer([
      new DivisibleByThreeRule(),
      new DivisibleByFiveRule(),
    ]);
  });

  it("should match numbers divisible by 3", () => {
    expect(fizzBuzzer.answer(3)).toBe("Fizz");
  });

  it("should match numbers divisible by 5", () => {
    expect(fizzBuzzer.answer(5)).toBe("Buzz");
  });

  it("should match numbers divisible by 15", () => {
    expect(fizzBuzzer.answer(15)).toBe("FizzBuzz");
  });

  it("should match return the input number if no matching rule", () => {
    expect(fizzBuzzer.answer(4)).toBe("4");
  });
});
