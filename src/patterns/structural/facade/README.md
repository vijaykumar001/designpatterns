# Facade Pattern

The Facade Design Pattern simplifies the interaction with a complex subsystem by providing a unified interface. In this example, the HomeTheater facade allows the client to control the entire home theater system with simple method calls, hiding the complexity of the underlying components. This pattern promotes better organization, easier maintenance, and improved usability of the system.

## Directory Structure
- `src/patterns/structural/facade/`: Contains the implementation of the Facade pattern.
- `tests/structural/facade/`: Contains the test cases for the facade implementation.

## Usage
1. Run the `index.ts` file to see how the home theater system can be controlled with a simple interface.
2. The `HomeTheaterFacade` interface allows for easy interaction with the underlying components.

## Example
```ts
// src/patterns/structural/facade/index.ts

import { HomeTheater } from './implementation/homeTheater';

function clientCode() {
    const homeTheater = new HomeTheater();
    homeTheater.watchMovie('Inception'); // Start watching a movie
    homeTheater.endMovie(); // End the movie
}

// Example usage
clientCode();
```
### 8. facadePattern.test.ts
```ts
import { HomeTheater } from '../../src/patterns/structural/facade/implementation/homeTheater';
describe('Facade Pattern', () => {
it('should watch a movie and shut down the home theater', () => {
const homeTheater = new HomeTheater();
const consoleSpy = jest.spyOn(console, 'log');
homeTheater.watchMovie('Inception');
expect(consoleSpy).toHaveBeenCalledWith('Getting ready to watch a movie...');
expect(consoleSpy).toHaveBeenCalledWith('Projector: Projector turned on.');
expect(consoleSpy).toHaveBeenCalledWith('Sound System: Sound system turned on.');
expect(consoleSpy).toHaveBeenCalledWith('Sound System: Volume set to 5.');
expect(consoleSpy).toHaveBeenCalledWith('DVD Player: Movie "Inception" inserted.');
expect(consoleSpy).toHaveBeenCalledWith('Projector: Input set to DVD.');
expect(consoleSpy).toHaveBeenCalledWith('DVD Player: Playing "Inception".');
homeTheater.endMovie();
expect(consoleSpy).toHaveBeenCalledWith('Shutting down the home theater...');
expect(consoleSpy).toHaveBeenCalledWith('DVD Player: Stopped playing "Inception".');
expect(consoleSpy).toHaveBeenCalledWith('Sound System: Sound system turned off.');
expect(consoleSpy).toHaveBeenCalledWith('Projector: Projector turned off.');
consoleSpy.mockRestore();
});
});
```


### Summary
This implementation demonstrates the Facade Design Pattern by providing a simplified interface to control a complex home theater system. The code adheres to SOLID principles, ensuring maintainability and scalability. 