import { Memento } from "../interfaces/mementoInterface";

/**
 * TextEditorCaretaker Class
 * Manages the mementos and provides undo functionality for the TextEditor.
 */
export class TextEditorCaretaker {
  private mementos: Memento[] = [];

  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  getLastMemento(): Memento | null {
    return this.mementos.pop() || null;
  }
}