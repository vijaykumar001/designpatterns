import { MediaFormat } from './mediaFormat';

/**
 * Interface for the MediaPlayer class.
 * 
 * @interface
 * @exports {MediaPlayer} - The MediaPlayer interface
 */
export interface MediaPlayer {
    play(format: MediaFormat): void;
}

