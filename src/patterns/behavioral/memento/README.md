# Memento Design Pattern

This example demonstrates the **Memento Design Pattern** through a text editor with an "Undo" feature.

## Problem Statement

In a text editor, users need an "Undo" feature to revert their content to a previous state. The Memento Design Pattern provides a way to save and restore the state of an object without exposing its internal structure.

## Implementation

### Features:
1. Save the state of the text editor.
2. Undo to revert to a previous state.

### Files and Structure:
- **Interfaces**:
  - `Memento`: Encapsulates the state of the originator.
  - `Originator`: Represents an object that can save and restore its state.
- **Implementations**:
  - `TextEditor`: Implements the Originator and represents the text editor.
  - `TextEditorCaretaker`: Manages mementos and provides undo functionality.

## How to run the tests:
1. Install dependencies:
   npm install
2. Run the Example
   ts-node src/patterns/behavioral/memento/index.ts
3. Run the tests:
   npm test

## Usage
```ts
// src/patterns/behavioral/memento/index.ts

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
```

## Expected Output
Current Content: Version 1
Current Content: Version 2
Current Content: Version 3
After Undo: Version 2
After Undo: Version 1


## Tests Cases - Test Snippet (from memento.test.ts)
```ts
// tests/behavioral/memento/memento.test.ts

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

```

## Benefits
1. Encapsulation: The internal state is not exposed to the caretaker.
2. Undo Functionality: Easily revert to a previous state.
3. SOLID Principles: Adheres to Single Responsibility and Open/Closed principles.


### Summary
The Memento Design Pattern is useful when you need to save and restore the state of an object, especially in scenarios where you want to provide an "Undo" feature. It encapsulates the state, ensuring that the internal structure of the originator is not exposed to the caretaker.