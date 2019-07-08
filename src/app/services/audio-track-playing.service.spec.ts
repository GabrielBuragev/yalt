import { TestBed } from '@angular/core/testing';

import { AudioTrackPlayingService } from './audio-track-playing.service';

describe('AudioTrackPlayingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioTrackPlayingService = TestBed.get(AudioTrackPlayingService);
    expect(service).toBeTruthy();
  });
});
