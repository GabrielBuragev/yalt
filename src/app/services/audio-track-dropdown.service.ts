import { Injectable } from '@angular/core';
import { AudioTrackDropdownItem } from '../models/AudioTrackDrodownItem';


@Injectable({
  providedIn: 'root'
})
export class AudioTrackDropdownService {
  public list:AudioTrackDropdownItem[];

  constructor() { }

  fetch(q) {

  }
}
