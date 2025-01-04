import { TextEditor } from "../../../src/patterns/behavioral/memento/implementations/textEditor";
import { TextEditorCaretaker } from "../../../src/patterns/behavioral/memento/implementations/textEditorCaretaker";

describe("Memento Design Pattern", () => {
  it("should save and restore the state of the text editor", () => {
    const editor = new TextEditor();
    const caretaker = new TextEditorCaretaker();

    editor.setContent("Version 1");
    caretaker.addMemento(editor.save());

    editor.setContent("Version 2");
    caretaker.addMemento(editor.save());

    editor.setContent("Version 3");
    expect(editor.getContent()).toBe("Version 3");

    // Undo to Version 2
    const previousVersion = caretaker.getLastMemento();
    if (previousVersion) {
      editor.restore(previousVersion);
    }
    expect(editor.getContent()).toBe("Version 2");

    // Undo to Version 1
    const earlierVersion = caretaker.getLastMemento();
    if (earlierVersion) {
      editor.restore(earlierVersion);
    }
    expect(editor.getContent()).toBe("Version 1");
  });
});