import { Expression } from "../interfaces/expression";

/**
 * Represents a terminal expression that holds a number.
 */
export class NumberExpression implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  interpret(): number {
    return this.number;
  }
}