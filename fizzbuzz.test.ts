import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {

  test("Fizzbuzz output value 1", () => {
    const result = fizzbuzz(1);
    expect(1).toBe(result);
  });

  test("Fizzbuzz output Fizz", () => {
    const result = fizzbuzz(3);
    expect("Fizz").toBe(result);
  });

  test("should output Buzz", () => {
    const result = fizzbuzz(5);
    expect("Buzz").toBe(result);
  });

  test("should output Fizz if the value is a multiple of 3", () => {
    const result = fizzbuzz(27);
    expect("Fizz").toBe(result);
  });

  test("should output Buzz if the value is a multiple of 5", () => {
    const result = fizzbuzz(50);
    expect("Buzz").toBe(result);
  });
  
  test("should print FizzBuzz if receive a multiple of 3 and 5", () => {
    const result = fizzbuzz(15);
    expect("Fizz Buzz").toBe(result);
  });
});