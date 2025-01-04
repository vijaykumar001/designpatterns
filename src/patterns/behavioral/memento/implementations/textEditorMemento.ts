import { Memento } from "../interfaces/mementoInterface";
/**
 * TextEditorMemento Class
 * Implements the Memento interface to encapsulate the state of the TextEditor.
 */
export class TextEditorMemento implements Memento {
  private state: string;
  private timestamp: string;

  constructor(state: string) {
    this.state = state;
    this.timestamp = new Date().toISOString();
  }

  getState(): string {
    return this.state;
  }

  getTimestamp(): string {
    return this.timestamp;
  }
}
