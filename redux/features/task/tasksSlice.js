import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "This is task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "This is task 2",
    completed: false,
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    removeTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    editTask: (state, action) => {

      const { id, ...updatedTaskData } = action.payload;
      const taskToEdit = state.find((item) => item.id === id);
      if (taskToEdit) {
        Object.assign(taskToEdit, updatedTaskData);
      }


    },
  },
});

export const { addTask, removeTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
