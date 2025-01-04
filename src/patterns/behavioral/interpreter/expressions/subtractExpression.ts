import { Expression } from "../interfaces/expression";

/**
 * Represents a subtraction operation in the Interpreter Design Pattern.
 */
export class SubtractExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}