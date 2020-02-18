import { fetchExpenses as fetchExpensesAPI, deleteExpense as deleteExpenseAPI } from '../api/expense'
import {
  getExpensesStart,
  getExpensesSuccess,
  getExpensesFailure,
  removeExpenseSuccess,
  removeExpenseFailed,
} from '../redux/actions/expensesActions'

export const getExpenses = () => (dispatch) => {
  dispatch(getExpensesStart())
  fetchExpensesAPI()
    .then((expenses) => {
      dispatch(getExpensesSuccess(expenses))
    })
    .catch((err) => {
      dispatch(getExpensesFailure(err))
    })
}

export const deleteExpense = (id) => (dispatch) => {
  deleteExpenseAPI(id)
    .then((res) => {
      dispatch(removeExpenseSuccess(id))
    })
    .catch((err) => {
      dispatch(removeExpenseFailed(err))
    })
}
