import { HomeTheater } from '../../../src/patterns/structural/facade/implementation/homeTheater';
/**
 * Test cases for the facade design pattern.
 */
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
