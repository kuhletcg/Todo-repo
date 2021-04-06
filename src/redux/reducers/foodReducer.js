import { ADD_FOOD, DELETE_FOOD } from "../actionTypes/food";

const initialState = {
  foodList: [],
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodList: [
          ...state.foodList,
          {
            key: Math.random(),
            name: action.payload,
          },
        ],
      };
    case DELETE_FOOD:
      return {
        ...state,
        foodList: action.payload,
      };
    default:
      return state;
  }
};

export default foodReducer;
