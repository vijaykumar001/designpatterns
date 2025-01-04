import { ICommand } from "../interfaces/command";

/**
 * Command to undo the last executed command.
 * Takes a reference to the command history.
 * Removes and undoes the last command in the history stack.
 * If there are no commands to undo, it logs a message.
 */
export class UndoCommand implements ICommand {
  private history: ICommand[];

  constructor(history: ICommand[]) {
    this.history = history;
  }

  execute(): void {
    if (this.history.length > 0) {
      const lastCommand = this.history.pop();
      if (lastCommand) {
        lastCommand.undo();
        console.log("Undo executed for the last command.");
      }
    } else {
      console.log("No commands to undo.");
    }
  }

  undo(): void {
    console.log("Undo operation cannot be undone.");
  }
}