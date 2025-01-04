import { MediaPlayer } from '../interface/mediaPlayer';
import { MediaFormat } from '../interface/mediaFormat';

export class VideoPlayer implements MediaPlayer {
    play(format: MediaFormat): void {
        console.log(`Playing video in format: ${format.decode()}`);
    }
}
