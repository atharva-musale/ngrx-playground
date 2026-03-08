import { createReducer, on } from "@ngrx/store";
import { initialCounterState } from "./counter.state";
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from "./counter.actions";

export const counterReducer = createReducer(
  initialCounterState,
  on(incrementCounterAction, state => ({ ...state, count: state.count + 1 })),
  on(decrementCounterAction, state => ({ ...state, count: state.count - 1 })),
  on(resetCounterAction, state => ({ ...state, count: 0 }))
);
