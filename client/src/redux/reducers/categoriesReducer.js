import { handleActions } from "redux-actions";
import {
  insertCategory,
  GetCategoriesStart,
  GetCategoriesEnd,
  DeleteCategory
} from "../actions/categoriesActions";

const initialState = {
  data: [
    {
      isFetching: false,
      data: null
    }
  ]
};

const categoriesReducer = handleActions(
  {
    [insertCategory]: (state = initialState, action) => {
      return {
        ...state,
        data: [...state.data, { name: action.payload }]
      };
    },
    [GetCategoriesStart]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: true
      };
    },
    [GetCategoriesEnd]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    },
    [DeleteCategory]: (state = initialState, action) => {
      return {
        ...state,
        data: state.data.filter(({ _id }) => _id !== action.payload)
      };
    }
  },
  initialState
);

export default categoriesReducer;
