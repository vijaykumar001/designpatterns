import { RedoCommand } from "../commands/redoCommand";
import { UndoCommand } from "../commands/undoCommand";
import { ICommand } from "../interfaces/command";

/**
 * Remote control to manage commands.
 */
export class RemoteControl {
    private history: ICommand[] = [];
    private redoStack: ICommand[] = [];

    executeCommand(command: ICommand): void {
        command.execute();
        this.history.push(command);
        // Clear the redo stack when a new command is executed
        this.redoStack = [];
    }

    undoLastCommand(): void {
        const undoCommand = new UndoCommand(this.history);
        undoCommand.execute();
    }

    redoLastCommand(): void {
        const redoCommand = new RedoCommand(this.history, this.redoStack);
        redoCommand.execute();
    }
}