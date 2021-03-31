import { NUMBER, ADD_FOOD, DELETE_FOOD } from "../actionTypes/food";

export const addFood = (food) => {
  return {
    type: ADD_FOOD,
    payload: food,
  };
};

export const deleteFood = (key) => ({
  type: DELETE_FOOD,
  payload: key,
});

export const ADD_NUMBER = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});
