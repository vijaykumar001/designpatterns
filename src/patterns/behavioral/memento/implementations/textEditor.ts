import { Memento } from "../interfaces/mementoInterface";
import { Originator } from "../interfaces/originatorInterface";
import { TextEditorMemento } from "./textEditorMemento";
/**
 * TextEditor Class
 * Implements the Originator interface and represents the text editor.
 */
export class TextEditor implements Originator {
  private content: string = "";

  setContent(content: string): void {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  save(): Memento {
    return new TextEditorMemento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getState();
  }
}