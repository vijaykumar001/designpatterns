import { Expression } from "../interfaces/expression";

/**
 * Represents a division operation in the Interpreter Design Pattern.
 */
export class DivideExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    const denominator = this.right.interpret();
    if (denominator === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return this.left.interpret() / denominator;
  }
}