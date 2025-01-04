/**
 * Interface for commands.
 */
export interface ICommand {
    execute(): void;
    undo(): void;
  }