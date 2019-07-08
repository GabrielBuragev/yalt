import { DropdownState } from './SearchDropdown.reducer';

export interface AppState {
    dropdown:  DropdownState,
}

export const selectDropdown = (state: AppState) => state.dropdown;