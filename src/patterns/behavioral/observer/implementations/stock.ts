import { Subject } from "../interfaces/subjectInterface";
import { Observer } from "../interfaces/observerInterface";

/**
 * Stock Class
 * Represents a stock and maintains a list of subscribers (observers).
 */
export class Stock implements Subject {
  private observers: Observer[] = [];
  private price: number = 0;

  constructor(private stockName: string) {}

  setPrice(price: number): void {
    this.price = price;
    this.notifyObservers();
  }

  getPrice(): number {
    return this.price;
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.stockName, this.price);
    }
  }
}