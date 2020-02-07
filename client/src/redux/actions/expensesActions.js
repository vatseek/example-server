import { createAction } from 'redux-actions'
import { SAVE_EXPENSE, FETCH_EXPENSES_START, FETCH_EXPENSES_SUCCESS } from '../actions/types'

const insertExpense = createAction(SAVE_EXPENSE)

const getExpensesStart = createAction(FETCH_EXPENSES_START)
const getExpenses = createAction(FETCH_EXPENSES_SUCCESS)

export { insertExpense, getExpensesStart, getExpenses }
