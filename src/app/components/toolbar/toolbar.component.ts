import { Component, OnInit } from '@angular/core';
import { AudioTrackDropdownService } from 'src/app/services/audio-track-dropdown.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  public searchVal:string = '';

  constructor(private audioTrackDropdownService:AudioTrackDropdownService) { }

  ngOnInit() {}

  onSearchChange(_event) {
    this.audioTrackDropdownService.fetch(this.searchVal);
  }

  onSearchClear(_event) {

  }

  onSearchFocus(_event){

  }

  onSearchBlur(_event){

  }

  onSearchInput(_event){
    console.log(_event);
  }

}
