import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AudioTrack } from '../../models/AudioTrack';
import { AudioTrackDetailsProviderService } from 'src/app/services/audio-track-details-provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-audio-controls',
  templateUrl: './audio-controls.component.html',
  styleUrls: ['./audio-controls.component.scss'],
})
export class AudioControlsComponent implements OnInit {
  audioTrackSelected$: Observable<AudioTrack>;

  @Output() 
    onPlay = new EventEmitter(); 
    onBack = new EventEmitter(); 
    onNext = new EventEmitter();
    onPause = new EventEmitter();

  constructor(public audioTrackDetailsProviderService: AudioTrackDetailsProviderService) {
    this.audioTrackSelected$ = this.audioTrackDetailsProviderService.getAudioTrackSelected();
  }

  ngOnInit() { }

  playClicked(evt){
    this.onPlay.emit(evt);
  }

  forwardClicked(evt){
    this.onNext.emit(evt);
  }

  backClicked(evt){
    this.onBack.emit(evt);
  }

  pauseClicked(evt){
    this.onPause.emit(evt);
  }
}
