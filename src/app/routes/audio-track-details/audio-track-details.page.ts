import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AudioTrackDetailsProviderService } from '../../services/audio-track-details-provider.service';
import { Observable } from 'rxjs';
import { AudioTrack } from '../../models/AudioTrack';
import { AudioTrackPlayingService } from '../../services/audio-track-playing.service';

// const CANPLAY = 'CANPLAY';
// const LOADEDMETADATA = 'LOADEDMETADATA';
// const PLAYING = 'PLAYING';
// const TIMEUPDATE = 'TIMEUPDATE';
// const LOADSTART = 'LOADSTART';
// const RESET = 'RESET';



@Component({
  selector: 'app-audio-track-details',
  templateUrl: './audio-track-details.page.html',
  styleUrls: ['./audio-track-details.page.scss'],
})
export class AudioTrackDetailsPage implements OnInit {
  audioTrackSelected$: Observable<AudioTrack>;
  
  constructor(
    private route: ActivatedRoute, 
    private audioTrackPlayingService: AudioTrackPlayingService, 
    public audioTrackDetailsProvider:AudioTrackDetailsProviderService,
  ) {
    this.audioTrackSelected$ = audioTrackDetailsProvider.getAudioTrackSelected();
   }

  ngOnInit() {
    var self = this;

    this.route.params.subscribe((params) => {
      self.audioTrackDetailsProvider.audioTrackId = params['id'];
      self.audioTrackDetailsProvider.set(params['id']);
    })
  }

  onPlay(evt){
    this.audioTrackSelected$.subscribe(val => this.audioTrackPlayingService.set(val));
    this.audioTrackPlayingService.play();
  }

  onNext(evt){

  }

  onBack(evt){
    
  }

  onPause(evt){
    this.audioTrackPlayingService.pause();
  }
}
