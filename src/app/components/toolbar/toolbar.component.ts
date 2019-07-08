import { Component, OnInit } from '@angular/core';
import { AudioTrackDropdownService } from 'src/app/services/audio-track-dropdown.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  public searchVal:string = '';

  constructor(private router: Router, private audioTrackDropdownService:AudioTrackDropdownService) { }

  ngOnInit() {}

  /** Deactivated for now */
  // onSearchChange(_event) {
  //   if(this.searchVal == '')
  //     return false;
  //   this.searchByQuery(this.searchVal);
  // }

  onSearchClear(_event) {
  }

  onSearchFocus(_event){

  }

  onSearchBlur(_event){

  }

  onSearchInput(_event){
    this.searchVal = _event.target.value;
  }

  onSearchSubmitted(_event){

    if(this.searchVal === '') { return false; }
    
    this.searchByQuery(this.searchVal);
  }

  searchByQuery(q){
    this.router.navigateByUrl('/home');
    
    this.audioTrackDropdownService.fetch(q)
  }

}
