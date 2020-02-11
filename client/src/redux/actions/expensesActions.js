import { createAction } from 'redux-actions'
import {
  SAVE_EXPENSE,
  FETCH_EXPENSES_START,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSES_FAILURE,
  REMOVE_EXPENSE,
} from '../actions/types'

const insertExpense = createAction(SAVE_EXPENSE)
const getExpensesStart = createAction(FETCH_EXPENSES_START)
const getExpensesSuccess = createAction(FETCH_EXPENSES_SUCCESS)
const getExpensesFailure = createAction(FETCH_EXPENSES_FAILURE)
const removeExpense = createAction(REMOVE_EXPENSE)

export { insertExpense, getExpensesStart, getExpensesSuccess, getExpensesFailure, removeExpense }
