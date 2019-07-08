import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AudioTrack } from '../models/AudioTrack';
import { Store } from '@ngrx/store';
import * as AudioTrackSelectedReducer from '../store/AudioTrackSelected.reducer';
import { AudioTrackSelectedSetAction } from '../store/AudioTrackSelected.actions';

@Injectable({
  providedIn: 'root'
})
export class AudioTrackDetailsProviderService {
  public audioTrackId: string;
  public audioTrackDetails: AudioTrack;
  public url = "http://7fcdedf4.ngrok.io/track/metadata"
  constructor(private http: HttpClient, public store: Store<AudioTrackSelectedReducer.AudioTrackSelectedState>) { }

  refresh(){
    if(this.audioTrackId == '')
      return console.warn('Calling refresh - AudioTrackDetails when audioTrackId is empty');
  
    return this.set(this.audioTrackId);

  }

  set(id){
    var self = this;

    return self.http
      .get<AudioTrack>(`${self.url}/${id}`)
      .subscribe((response) => {
        self.store.dispatch(new AudioTrackSelectedSetAction(response));
      })
  }

  getAudioTrackSelected(){
    return this.store.select(AudioTrackSelectedReducer.getAudioTrackSelected);
  }
}
