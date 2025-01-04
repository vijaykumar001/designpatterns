import { TextEditor } from "./implementations/textEditor";
import { TextEditorCaretaker } from "./implementations/textEditorCaretaker";

/**
 * Entry point for the Memento Design Pattern example.
 */
const main = () => {
  const editor = new TextEditor();
  const caretaker = new TextEditorCaretaker();

  editor.setContent("Version 1");
  caretaker.addMemento(editor.save());
  console.log("Current Content:", editor.getContent());

  editor.setContent("Version 2");
  caretaker.addMemento(editor.save());
  console.log("Current Content:", editor.getContent());

  editor.setContent("Version 3");
  console.log("Current Content:", editor.getContent());

  // Undo to Version 2
  const previousVersion = caretaker.getLastMemento();
  if (previousVersion) {
    editor.restore(previousVersion);
  }
  console.log("After Undo:", editor.getContent());

  // Undo to Version 1
  const earlierVersion = caretaker.getLastMemento();
  if (earlierVersion) {
    editor.restore(earlierVersion);
  }
  console.log("After Undo:", editor.getContent());
};

main();