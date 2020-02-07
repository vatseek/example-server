// import { get } from 'lodash'
import { handleActions } from 'redux-actions'
import { AddExpense} from '../actions/expensesActions'

const initialState = {
    data:null,
}

const expensesReducer = handleActions({
    [AddExpense]: (state, {payload}) => {
        return{
            ...state,
            data:payload
        }
    }
}, initialState)

export default expensesReducer