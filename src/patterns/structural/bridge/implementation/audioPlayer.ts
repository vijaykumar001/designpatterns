import { MediaPlayer } from '../interface/mediaPlayer';
import { MediaFormat } from '../interface/mediaFormat';

// AudioPlayer class implements the MediaPlayer interface
// It uses the MediaFormat interface to play audio in different formats
// It is a structural pattern that allows classes to work together that could not otherwise because of incompatible interfaces
// It is a design pattern that allows two incompatible interfaces to work together

export class AudioPlayer implements MediaPlayer {
    play(format: MediaFormat): void {
        console.log(`Playing audio in format: ${format.decode()}`);
    }
}
