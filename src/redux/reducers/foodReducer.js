import { ADD_FOOD, DELETE_FOOD } from "../actions/types";

const initialState = {
  foodList: [],
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodList: state.foodList.concat({
          key: Math.random(),
          name: action.payload,
        }),
      };
    case DELETE_FOOD:
      return {
        ...state,
        foodList: state.foodList.filter((item) => item.key !== action.payload),
      };
    default:
      return state;
  }
};

export default foodReducer;
