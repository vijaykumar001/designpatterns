import { AudioPlayer } from './implementation/audioPlayer';
import { VideoPlayer } from './implementation/videoPlayer';
import { Mp3Format } from './implementation/mp3Format';
import { Mp4Format } from './implementation/mp4Format';
/**
 * Main entry point for the bridge implementation.
 * 
 * @module
 * @exports {AudioPlayer} - The AudioPlayer class
 * @exports {VideoPlayer} - The VideoPlayer class
 * @exports {Mp3Format} - The Mp3Format class
 * @exports {Mp4Format} - The Mp4Format class
 */
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