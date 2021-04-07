import { ADD_TODO, DELETE_TODO } from "../actionTypes/todo";

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            key: Math.random(),
            name: action.payload,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
