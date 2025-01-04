import { MediaPlayer } from '../interface/mediaPlayer';
import { MediaFormat } from '../interface/mediaFormat';

/**
 * Class for the VideoPlayer class.
 * 
 * @class
 * @implements {MediaPlayer}
 */
export class VideoPlayer implements MediaPlayer {
    play(format: MediaFormat): void {
        console.log(`Playing video in format: ${format.decode()}`);
    }
}
