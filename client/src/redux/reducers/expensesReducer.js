import { handleActions } from 'redux-actions'
import {
  insertExpense,
  getExpensesStart,
  getExpensesSuccess,
  getExpensesFailure,
  removeExpenseSuccess,
  removeExpenseFailed,
} from '../actions/expensesActions'

const initialState = {
  data: [],
  isFetching: false,
  error: null,
}

const expensesReducer = handleActions(
  {
    [insertExpense]: (state = initialState, action) => {
      return {
        ...state,
        data: [action.payload, ...state.data],
      }
    },
    [getExpensesStart]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: true,
      }
    },
    [getExpensesSuccess]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }
    },
    [getExpensesFailure]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    },
    [removeExpenseSuccess]: (state = initialState, action) => {
      return {
        ...state,
        data: state.data.filter(({ _id }) => _id !== action.payload),
      }
    },
    [removeExpenseFailed]: (state = initialState, action) => {
      return {
        ...state,
        error: action.payload,
      }
    },
  },
  initialState,
)

export default expensesReducer
