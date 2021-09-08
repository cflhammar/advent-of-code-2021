import { DivisibleByThreeRule } from "../rules/DivisibleByThreeRule";

describe("Test DivisibleByThreeRule", () => {
  it("Makes sure a number divisible by three returns true", () => {
    const rule = new DivisibleByThreeRule();
    expect(rule.matches(3)).toBe(true);
  });

  it("Makes sure a number not divisible by three returns false", () => {
    const rule = new DivisibleByThreeRule();
    expect(rule.matches(4)).toBe(false);
  });
});
