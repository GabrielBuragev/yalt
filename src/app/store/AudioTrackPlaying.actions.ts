import { AudioTrack } from '../models/AudioTrack';

export const SET_PLAYING = "[AudioTrackPlaying] set";
export const CLEAR_PLAYING = "[AudioTrackPlaying] clear";

export class AudioTrackPlayingSetAction {
    type = SET_PLAYING;

    constructor(public payload: AudioTrack ){}
}