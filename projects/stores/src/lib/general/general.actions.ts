import { createAction, props } from "@ngrx/store";

const SET_MULTIPLIER = '[General] Set Multiplier';
const CLEAR_MULTIPLIER = '[General] Clear Multiplier';
const RESET_STATE = '[General] Reset State';

export const GeneralActions = {
  setMultiplierAction: SET_MULTIPLIER,
  clearMultiplierAction: CLEAR_MULTIPLIER,
  resetGeneralStateAction: RESET_STATE
};

export const setMultiplierAction = createAction(SET_MULTIPLIER, props<{ value: number }>());
export const clearMultiplierAction = createAction(CLEAR_MULTIPLIER);
export const resetGeneralStateAction = createAction(RESET_STATE);
