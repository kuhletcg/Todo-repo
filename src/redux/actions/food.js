import { NUMBER, ADD_FOOD, DELETE_FOOD } from "../actionTypes/food";

export const addFood = (food) => ({
  type: ADD_FOOD,
  payload: food,
});

export const deleteFood = (key) => ({
  type: DELETE_FOOD,
  payload: food,
});

export const ADD_NUMBER = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});
