
import { AudioTrack } from '../models/AudioTrack';

export const SET_SELECTED = "[AudioTrackSelected] set";
export const CLEAR_SELECTED = "[AudioTrackSelected] clear";

export class AudioTrackSelectedSetAction {
    type = SET_SELECTED;

    constructor(public payload: AudioTrack ){}
}