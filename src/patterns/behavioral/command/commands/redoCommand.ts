import { ICommand } from "../interfaces/command";

/**
 * Command to redo the last undone command.
 * Takes references to both the command history and a redo stack.
 * Re-executes the last undone command from the redo stack and pushes it back into the history stack.
 * If there are no commands to redo, it logs a message.
 */
export class RedoCommand implements ICommand {
  private redoStack: ICommand[];
  private history: ICommand[];

  constructor(history: ICommand[], redoStack: ICommand[]) {
    this.history = history;
    this.redoStack = redoStack;
  }

  execute(): void {
    if (this.redoStack.length > 0) {
      const lastUndoneCommand = this.redoStack.pop();
      if (lastUndoneCommand) {
        lastUndoneCommand.execute();
        this.history.push(lastUndoneCommand);
        console.log("Redo executed for the last undone command.");
      }
    } else {
      console.log("No commands to redo.");
    }
  }

  undo(): void {
    console.log("Redo operation cannot be undone.");
  }
}