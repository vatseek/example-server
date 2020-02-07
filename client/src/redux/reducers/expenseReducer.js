import { handleActions } from 'redux-actions'

const initialState = {}

const expenseReducer = handleActions({}, initialState)

export default expenseReducer