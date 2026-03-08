import { createReducer, on } from "@ngrx/store";
import { initialGeneralState } from "./general.state";
import { clearMultiplierAction, resetGeneralStateAction, setMultiplierAction } from "./general.actions";

export const generalReducer = createReducer(
  initialGeneralState,
  on(setMultiplierAction, (state, { value }) => ({ ...state, multiplier: value })),
  on(clearMultiplierAction, state => ({ ...state, multiplier: undefined })),
  on(resetGeneralStateAction, _state => initialGeneralState)
);
