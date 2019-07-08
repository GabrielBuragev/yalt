import { Injectable } from '@angular/core';
import { AudioPlayerService } from './audio-player.service';
import { AudioTrack } from '../models/AudioTrack';
import { Observable } from 'rxjs';
import * as AudioTrackPlayingReducer from '../store/AudioTrackPlaying.reducer';
import { AudioTrackPlayingSetAction } from '../store/AudioTrackPlaying.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AudioTrackPlayingService {
  public audioTrackPlaying$: Observable<AudioTrack>;

  constructor(public audioPlayer: AudioPlayerService, public store: Store<AudioTrackPlayingReducer.AudioTrackPlayingState>) { 
    this.audioTrackPlaying$ = this.store.select(AudioTrackPlayingReducer.getAudioTrackPlaying);
  }

  set( audioTrack: AudioTrack ){
    this.store.dispatch(new AudioTrackPlayingSetAction(audioTrack));
  }

  getAudioTrackPlaying(){
    return this.store.select(AudioTrackPlayingReducer.getAudioTrackPlaying);
  }

  play(){
    this.audioPlayer.playStream().subscribe(val => {
      console.log('hey');
    })
  }

  pause(){
    this.audioPlayer.pause();
  }


}
