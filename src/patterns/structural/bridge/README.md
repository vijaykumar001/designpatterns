# Bridge Pattern

This project demonstrates the Bridge Design Pattern in TypeScript by separating the abstraction of media players from their format implementations.

## Directory Structure
- `src/patterns/structural/bridge/`: Contains the implementation of the Bridge pattern.
- `tests/structural/bridge/`: Contains the test cases for the bridge implementation.

## Usage
1. Run the `index.ts` file to see how media players can play different formats.
2. The `MediaPlayer` interface allows for flexible media player creation, while the `MediaFormat` interface allows for flexible format application.

## Example
```ts
// src/patterns/structural/bridge/index.ts
import { AudioPlayer } from './implementation/audioPlayer';
import { VideoPlayer } from './implementation/videoPlayer';
import { Mp3Format } from './implementation/mp3Format';
import { Mp4Format } from './implementation/mp4Format';

function clientCode() {
    const audioPlayer = new AudioPlayer();
    const mp3Format = new Mp3Format();
    audioPlayer.play(mp3Format); // Playing audio in format: MP3

    const videoPlayer = new VideoPlayer();
    const mp4Format = new Mp4Format();
    videoPlayer.play(mp4Format); // Playing video in format: MP4
}

// Example usage
clientCode();
```
### 9. bridgePattern.test.ts
```ts
typescript:tests/structural/bridge/bridgePattern.test.ts
// tests/structural/bridge/bridgePattern.test.ts
import { AudioPlayer } from '../../src/patterns/structural/bridge/implementation/audioPlayer';
import { VideoPlayer } from '../../src/patterns/structural/bridge/implementation/videoPlayer';
import { Mp3Format } from '../../src/patterns/structural/bridge/implementation/mp3Format';
import { Mp4Format } from '../../src/patterns/structural/bridge/implementation/mp4Format';
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
```

### Summary
This implementation demonstrates the Bridge Design Pattern by allowing the separation of media player abstractions from their format implementations. This design enables flexibility in combining media players and formats without creating a large number of subclasses. The code adheres to SOLID principles, ensuring maintainability and scalability.

