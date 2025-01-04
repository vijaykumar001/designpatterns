import { AudioPlayer } from '../../../src/patterns/structural/bridge/implementation/audioPlayer';
import { VideoPlayer } from '../../../src/patterns/structural/bridge/implementation/videoPlayer';
import { Mp3Format } from '../../../src/patterns/structural/bridge/implementation/mp3Format';
import { Mp4Format } from '../../../src/patterns/structural/bridge/implementation/mp4Format';
/**
 * Test cases for the bridge design pattern.
 */
describe('Bridge Pattern', () => {
    it('should play audio in MP3 format', () => {
        const audioPlayer = new AudioPlayer();
        const mp3Format = new Mp3Format();
        const consoleSpy = jest.spyOn(console, 'log');
        audioPlayer.play(mp3Format);
        expect(consoleSpy).toHaveBeenCalledWith('Playing audio in format: MP3');
        consoleSpy.mockRestore();
    });
    it('should play video in MP4 format', () => {
        const videoPlayer = new VideoPlayer();
        const mp4Format = new Mp4Format();
        const consoleSpy = jest.spyOn(console, 'log');
        videoPlayer.play(mp4Format);
        expect(consoleSpy).toHaveBeenCalledWith('Playing video in format: MP4');
        consoleSpy.mockRestore();
    });
});