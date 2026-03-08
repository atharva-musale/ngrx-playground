import { createAction } from "@ngrx/store";

export const CounterActions = {
  incrementAction: '[Counter] Increment',
  decrementAction: '[Counter] Decrement',
  resetAction: '[Counter] Reset'
};

export const incrementCounterAction = createAction(CounterActions.incrementAction);
export const decrementCounterAction = createAction(CounterActions.decrementAction);
export const resetCounterAction = createAction(CounterActions.resetAction);
