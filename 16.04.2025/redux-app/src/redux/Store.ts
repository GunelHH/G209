import { createStore } from "redux";
import { counterReducer } from "./Reducer";

export const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
