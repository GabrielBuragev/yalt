import { TestBed } from '@angular/core/testing';

import { AudioTrackDropdownService } from './audio-track-dropdown-service';

describe('AudioTrackDropdownServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioTrackDropdownService = TestBed.get(AudioTrackDropdownService);
    expect(service).toBeTruthy();
  });
});
