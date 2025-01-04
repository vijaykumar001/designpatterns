import { MediaFormat } from '../interface/mediaFormat';

// Mp3Format class implements the MediaFormat interface
export class Mp3Format implements MediaFormat {
    decode(): string {
        return 'MP3';
    }
}
