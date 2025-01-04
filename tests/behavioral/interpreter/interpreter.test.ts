// tests/behavioral/interpreter/interpreter.test.ts

import { NumberExpression } from "../../../src/patterns/behavioral/interpreter/expressions/numberExpression";
import { AddExpression } from "../../../src/patterns/behavioral/interpreter/expressions/addExpression";
import { SubtractExpression } from "../../../src/patterns/behavioral/interpreter/expressions/subtractExpression";
import { MultiplyExpression } from "../../../src/patterns/behavioral/interpreter/expressions/multiplyExpression";
import { DivideExpression } from "../../../src/patterns/behavioral/interpreter/expressions/divideExpression";

describe("Interpreter Design Pattern", () => {
  it("should interpret a composite expression", () => {
    const left = new NumberExpression(10);
    const right = new NumberExpression(5);

    const addition = new AddExpression(left, right); // 10 + 5 = 15
    const multiplication = new MultiplyExpression(addition, new NumberExpression(2)); // 15 * 2 = 30
    const division = new DivideExpression(multiplication, new NumberExpression(3)); // 30 / 3 = 10
    const subtraction = new SubtractExpression(division, new NumberExpression(1)); // 10 - 1 = 9

    expect(subtraction.interpret()).toBe(9);
  });

  it("should throw an error for division by zero", () => {
    const left = new NumberExpression(10);
    const right = new NumberExpression(0);

    const division = new DivideExpression(left, right);

    expect(() => division.interpret()).toThrowError("Division by zero is not allowed.");
  });
});
