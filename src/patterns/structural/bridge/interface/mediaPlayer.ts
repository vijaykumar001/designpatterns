import { MediaFormat } from './mediaFormat';

export interface MediaPlayer {
    play(format: MediaFormat): void;
}
