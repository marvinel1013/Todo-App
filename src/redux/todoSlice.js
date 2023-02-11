import { createSlice } from "@reduxjs/toolkit";

const todoStorage = localStorage.getItem("TODO_APP_DATA")
  ? JSON.parse(localStorage.getItem("TODO_APP_DATA"))
  : [];

const initialState = {
  value: todoStorage,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("TODO_APP_DATA", JSON.stringify(state.value));
    },

    completeTodo: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.status = action.payload.status;
        }
        return todo;
      });
      localStorage.setItem("TODO_APP_DATA", JSON.stringify(state.value));
    },

    updateTodo: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
          todo.status = action.payload.status;
        }
        return todo;
      });
      localStorage.setItem("TODO_APP_DATA", JSON.stringify(state.value));
    },

    deleteTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("TODO_APP_DATA", JSON.stringify(state.value));
    },
  },
});

export const { addTodo, completeTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
export const todoValue = (state) => state.todos.value;
export default todoSlice.reducer;
