import { NUMBER, ADD_TODO, DELETE_TODO } from "../actionTypes/todo";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (key) => ({
  type: DELETE_TODO,
  payload: key,
});

export const ADD_NUMBER = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});
