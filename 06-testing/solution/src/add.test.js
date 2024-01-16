import { expect, test, describe } from "vitest";
import add from "./add.js";

// Exercise 1
describe("Test that add returns the correct result from two numbers", () => {
  test("should return the sum of two numbers", () => {
    const result = add(3, 2);
    expect(result).to.equal(5);
  });
});

// Exercise 2
describe("Test that the add works with negative numbers", () => {
  test("should return the sum of two numbers when one is negative", () => {
    const result = add(-2, 5);
    expect(result).to.equal(3);
  });

  test("should return the sum of two numbers when both are negative", () => {
    const result = add(-2, -3);
    expect(result).to.equal(-5);
  });
});

// Exercise 3 - note: these tests don't even compile with TS!
describe("Test that there will be an error if you pass in non-numbers", () => {
  test("should throw an error when one of the arguments is not a number", () => {
    expect(() => add("3", 2)).to.throw();
  });
  test("should throw an error when both arguments are not numbers", () => {
    expect(() => add("a", "b")).to.throw();
  });
});
