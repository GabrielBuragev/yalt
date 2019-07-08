import { TestBed } from '@angular/core/testing';

import { AudioTrackDetailsProviderService } from './audio-track-details-provider.service';

describe('AudioTrackDetailsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioTrackDetailsProviderService = TestBed.get(AudioTrackDetailsProviderService);
    expect(service).toBeTruthy();
  });
});
