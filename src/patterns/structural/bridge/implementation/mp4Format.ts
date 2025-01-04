import { MediaFormat } from '../interface/mediaFormat';

// Mp4Format class implements the MediaFormat interface
export class Mp4Format implements MediaFormat {
    decode(): string {
        return 'MP4';
    }
}
