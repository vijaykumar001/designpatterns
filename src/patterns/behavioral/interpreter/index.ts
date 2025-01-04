import { NumberExpression } from "./expressions/numberExpression";
import { AddExpression } from "./expressions/addExpression";
import { SubtractExpression } from "./expressions/subtractExpression";
import { MultiplyExpression } from "./expressions/multiplyExpression";
import { DivideExpression } from "./expressions/divideExpression";

/**
 * Entry point for the Interpreter Design Pattern example.
 */
export const interpretExpression = (): number => {
  const left = new NumberExpression(10);
  const right = new NumberExpression(5);

  // Create a composite expression: ((10 + 5) * 2) / 3
  const addition = new AddExpression(left, right);
  const multiplication = new MultiplyExpression(addition, new NumberExpression(2));
  const division = new DivideExpression(multiplication, new NumberExpression(3));
  const subtraction = new SubtractExpression(division, new NumberExpression(1));

  return subtraction.interpret();
};

console.log("Result of the expression:", interpretExpression());
