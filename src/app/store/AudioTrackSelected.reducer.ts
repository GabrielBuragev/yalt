import { AudioTrack } from '../models/AudioTrack';
import * as AudioTrackSelectedChangeAction from './AudioTrackSelected.actions';

export interface AudioTrackSelectedState {
    track: AudioTrack,
}

export const initialState: AudioTrackSelectedState = {
    track: new AudioTrack(),
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case AudioTrackSelectedChangeAction.SET_SELECTED:
            state.track = action.payload;
            return state;
        default:
            return state;
    }
  }

  /**
   *  TODO: try to find out why rootState is actually the root state instaed of DropdownState ???
   * */ 
  export const getAudioTrackSelected = (rootState: AudioTrackSelectedState) => rootState.audioTrackSelected.track;