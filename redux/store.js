import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/task/tasksSlice";
import counterReducer from "./features/CounterSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    counter: counterReducer,
  },
});
