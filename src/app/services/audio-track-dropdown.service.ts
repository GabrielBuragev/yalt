import { Injectable } from '@angular/core';
import { AudioTrackDropdownItem } from '../models/AudioTrackDrodownItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudioTrackDropdownService {
  public list:AudioTrackDropdownItem[];
  public url:string = "https://my-json-server.typicode.com/GabrielBuragev/yalt/audioTrackDropdownItems";

  constructor(private http:HttpClient) { }

  fetch(q) {
    this.http.get<AudioTrackDropdownItem[]>(this.url).subscribe(items => {this.list = items; console.log(this.list)});
  }
}
