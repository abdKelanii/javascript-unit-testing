import { describe, it, expect } from "vitest";
import { max, fizzBuzz, calcAverage, factorial } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is the greate", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is the greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if both are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return FizzBuzz if arg is only divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return Buzz if arg is only divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return arg as string if it is not divisible by 3 or 5", () => {
    expect(fizzBuzz(22)).toBe("22");
  });
});

describe("calcAverage", () => {
  it("should return NaN if it is given an empty array", () => {
    expect(calcAverage([])).toBe(NaN);
  });

  it("should calculate the average of an array with a single element", () => {
    expect(calcAverage([1])).toBe(1);
  });

  it("should calculate the average of an array with a two element", () => {
    expect(calcAverage([1, 2])).toBe(1.5);
  });

  it("should calculate the average of an array with a two element", () => {
    expect(calcAverage([1, 2, 3])).toBe(2);
  });
});

describe("factorial", () => {
  it("should return 0 if the argument is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if the argument is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return the factorial of the argument", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return undefined if the given arg is a negative number", () => {
    expect(factorial(-5)).toBeUndefined();
  });
});
