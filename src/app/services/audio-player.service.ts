import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import * as moment from 'moment';
import * as AudioTrackPlayingReducer from '../store/AudioTrackPlaying.reducer';
import { AudioTrack } from '../models/AudioTrack';
import { Store } from '@ngrx/store';

@Injectable()
export class AudioPlayerService {
  public audioTrackPlaying$: Observable<AudioTrack>;
  public mp3BaseURL: string = "http://7fcdedf4.ngrok.io/track/${id}";
  private stop$ = new Subject();
  private audioObj = new Audio();

  constructor(public store: Store<AudioTrackPlayingReducer.AudioTrackPlayingState>) {
    this.audioTrackPlaying$ = this.store.select(AudioTrackPlayingReducer.getAudioTrackPlaying);
   }

  private streamObservable(url) {
    var self = this;

    let events = [
      'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay', 'loadedmetadata', 'loadstart'
    ];

    const addEvents = function(obj, events, handler) {
      events.forEach(event => {
        obj.addEventListener(event, handler);
        console.log(this.audioObj.duration);
      });
    };

    const removeEvents = function(obj, events, handler) {
      events.forEach(event => {
        obj.removeEventListener(event, handler);
      });
    };

    return Observable.create(observer => {
      // Play audio
      self.audioObj.src = url;
      self.audioObj.load();
      self.audioObj.play();

      // Media Events
      const handler = (event) => observer.next(event);
      addEvents(self.audioObj, events, handler);

      return () => {
        // Stop Playing
        self.audioObj.pause();
        self.audioObj.currentTime = 0;

        // Remove EventListeners
        removeEvents(self.audioObj, events, handler);
      };
    });
  }

  getDownloadURL(){
    let id: string;

    this.audioTrackPlaying$.subscribe(val => { id = val.id; });
    return this.mp3BaseURL.replace('${id}', id);
  }
  
  playStream() {
    var url = this.getDownloadURL();
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    console.log('before error');
    this.audioObj.play();
    console.log('after error');

  }

  pause() {
    console.log('before error');
    this.audioObj.pause();
    console.log('after error');

  }

  stop() {
    this.stop$.next();
  }

  seekTo(seconds) {
    this.audioObj.currentTime = seconds;
  }

  formatTime(time, format) {
    return moment.utc(time).format(format);
  }
}