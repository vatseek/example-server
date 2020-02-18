import { createAction } from 'redux-actions'
import {
  SAVE_EXPENSE,
  FETCH_EXPENSES_START,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSES_FAILURE,
  REMOVE_EXPENSE_SUCCESS,
  REMOVE_EXPENSE_FAILURE,
} from '../actions/types'

const insertExpense = createAction(SAVE_EXPENSE)
const getExpensesStart = createAction(FETCH_EXPENSES_START)
const getExpensesSuccess = createAction(FETCH_EXPENSES_SUCCESS)
const getExpensesFailure = createAction(FETCH_EXPENSES_FAILURE)
const removeExpenseSuccess = createAction(REMOVE_EXPENSE_SUCCESS)
const removeExpenseFailed = createAction(REMOVE_EXPENSE_FAILURE)

export {
  insertExpense,
  removeExpenseSuccess,
  removeExpenseFailed,
  getExpensesStart,
  getExpensesSuccess,
  getExpensesFailure,
}
