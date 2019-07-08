import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchDropdownResponse } from '../models/SearchDropdownResponse';
import { Store } from '@ngrx/store';
import { SearchDropdownSetAction, SearchDropdownNextPageTokenSet } from '../store/SearchDropdown.actions';
import * as SearchDropdownReducer from '../store/SearchDropdown.reducer';

@Injectable({
  providedIn: 'root'
})
export class AudioTrackDropdownService {
  public nextPageToken: string;
  public baseURL:string = "http://7fcdedf4.ngrok.io";
  public searchRoute: string = '/search';
   
  constructor(private http:HttpClient, private store: Store<SearchDropdownReducer.DropdownState>) { }

  fetch(q) {
    
    var self = this;
    return this.http
      .get<SearchDropdownResponse>(self.generateSearchURL(q))
      .subscribe((response) =>  { 
        self.store.dispatch(new SearchDropdownSetAction(response.items));
        self.store.dispatch(new SearchDropdownNextPageTokenSet(response.nextPageToken));
      });
  }

  generateSearchURL(q){
    return `${this.baseURL}${this.searchRoute}?q=${q}`;
  }

  getDropdownItems(){
    return this.store.select(SearchDropdownReducer.getDropdownItemList);
  }
}
