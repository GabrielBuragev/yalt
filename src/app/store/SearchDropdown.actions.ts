import { SearchDropdownItem } from '../models/SearchDropdownItem'
import { Action } from '@ngrx/store'

export const DROPDOWN_SET = '[SearchDropdown] Items - set';
export const DROPDOWN_APPEND = '[SearchDropdown] Items - append';
export const DROPDOWN_CLEAR = '[SearchDropdown] Items - clear';
export const NEXT_PAGE_TOKEN_SET = '[SearchDropdown] Metadata - "Next page token set" ';

export class SearchDropdownClearAction implements Action {
  type = DROPDOWN_CLEAR
}

export class SearchDropdownAppendAction implements Action {
    type = DROPDOWN_APPEND

    constructor(public payload: SearchDropdownItem[]) {}
  }

export class SearchDropdownSetAction implements Action {
  type = DROPDOWN_SET

  constructor(public payload: SearchDropdownItem[]) {}
}

export class SearchDropdownNextPageTokenSet implements Action {
  type = NEXT_PAGE_TOKEN_SET
  
  constructor(public payload: string) {}
}