import { handleActions } from 'redux-actions'
import { SAVE_EXPENSE } from '../actions/types'

const initialState = {
	data: [],
}

const expensesReducer = handleActions(
	{
		[SAVE_EXPENSE]: (state = initialState, action) => {
			return {
				...state,
				data: [...state.data, action.payload],
			}
		},
	},
	initialState,
)

export default expensesReducer
