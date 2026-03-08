import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GeneralState } from "./general.state";


export const selectGeneralState = createFeatureSelector<GeneralState>('general');

export const selectMultiplier = createSelector(selectGeneralState, state => state.multiplier);
