import { SearchDropdownItem } from '../models/SearchDropdownItem'
import * as SearchDropdownChangeAction from './SearchDropdown.actions';
import { createSelector } from '@ngrx/store';
import { selectDropdown } from './AppState.reducer';
import { AppState } from './AppState.reducer';

export interface DropdownState {
    items: SearchDropdownItem[],
    nextPageToken: string,
}

export const initialState: DropdownState = {
    items: [],
    nextPageToken: '',
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SearchDropdownChangeAction.NEXT_PAGE_TOKEN_SET:
            state.nextPageToken = action.payload;
            return state;
        case SearchDropdownChangeAction.DROPDOWN_APPEND:
            state.items.concat(action.payload); 
            return state;
        case SearchDropdownChangeAction.DROPDOWN_CLEAR:
            state.items = initialState.items;
            return state;
        case SearchDropdownChangeAction.DROPDOWN_SET:
            state.items = action.payload;
            return state;
        default:
            return state;
    }
  }

  /**
   *  TODO: try to find out why rootState is actually the root state instaed of DropdownState ???
   * */ 
  export const getDropdownItemList = (rootState: DropdownState) => rootState.dropdown.items;
  export const getNextPageToken = (rootState: DropdownState) => rootState.dropdown.nextPageToken;