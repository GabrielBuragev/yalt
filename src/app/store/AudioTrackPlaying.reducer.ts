import { AudioTrack } from '../models/AudioTrack';
import * as AudioTrackSelectedChangeAction from './AudioTrackPlaying.actions';

export interface AudioTrackPlayingState {
    track: AudioTrack,
}

export const initialState: AudioTrackPlayingState = {
    track: new AudioTrack(),
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case AudioTrackSelectedChangeAction.SET_PLAYING:
            {
                state.track = action.payload;
                state.track.sound.playing = true;
                return state;
            }
        default:
            return state;
    }
  }

  /**
   *  TODO: try to find out why rootState is actually the root state instaed of DropdownState ???
   * */ 
  export const getAudioTrackPlaying = (rootState: AudioTrackPlayingState) => rootState.audioTrackPlaying.track;