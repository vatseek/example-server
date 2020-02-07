import { createAction } from 'redux-actions'
const FETCH_EXPENSE = 'FETCH_EXPENSE'

const fetchExpense = createAction(FETCH_EXPENSE)

export { fetchExpense }