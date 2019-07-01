import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  public searchVal:string = '';

  constructor() { }

  ngOnInit() {}

  onSearchChange(_event) {
    window.alert(this.searchVal);
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
