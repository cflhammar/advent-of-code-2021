import { DivisibleByFiveRule } from "../rules/DivisibleByFiveRule";

describe("Test DivisibleByFiveRule", () => {
  it("Makes sure a number divisible by five returns true", () => {
    const rule = new DivisibleByFiveRule();
    expect(rule.matches(5)).toBe(true);
  });

  it("Makes sure a number not divisible by five returns false", () => {
    const rule = new DivisibleByFiveRule();
    expect(rule.matches(4)).toBe(false);
  });
});
