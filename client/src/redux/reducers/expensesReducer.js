import { handleActions } from 'redux-actions'

const initialState = {}

const expensesReducer = handleActions({}, initialState)

export default expensesReducer
