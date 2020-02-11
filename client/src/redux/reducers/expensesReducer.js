// import { get } from 'lodash'
import { handleActions } from "redux-actions";
import {
  AddExpense,
  GetExpensesStart,
  GetExpensesEnd,
  DeleteExpense
} from "../actions/expensesActions";

const initialState = {
  isFetching: false,
  data: null
};

const expensesReducer = handleActions(
  {
    [AddExpense]: (state = initialState, action) => {
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    },
    [GetExpensesStart]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: true
      };
    },
    [GetExpensesEnd]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    },
    [DeleteExpense]: (state = initialState, action) => {
      return {
        ...state,
        data: state.data.filter(({ _id }) => _id !== action.payload)
      };
    }
  },
  initialState
);

export default expensesReducer;
