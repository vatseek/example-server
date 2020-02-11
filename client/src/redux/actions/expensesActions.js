import { createAction } from 'redux-actions'
const ADD_EXPENSE = 'ADD_EXPENSE'
const GET_EXPENSES_START = 'GET_EXPENSES_START'
const GET_EXPENSES_END = 'GET_EXPENSES_END'
const DELETE_EXPENSE = 'DELETE_EXPENSE'

const AddExpense = createAction(ADD_EXPENSE)
const GetExpensesStart= createAction(GET_EXPENSES_START)
const GetExpensesEnd = createAction(GET_EXPENSES_END)
const DeleteExpense = createAction(DELETE_EXPENSE)


export { AddExpense, GetExpensesStart, GetExpensesEnd,  DeleteExpense}