import { INCREMENT, DECREMENT, CounterActionTypes } from "./Actions";

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = (
  state = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
};
