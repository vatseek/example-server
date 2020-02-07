import { handleActions } from 'redux-actions'
import { SAVE_EXPENSE, FETCH_EXPENSES_START, FETCH_EXPENSES_SUCCESS, REMOVE_EXPENSE } from '../actions/types'

const initialState = {
	isFetching: false,
	data: [],
}

const expensesReducer = handleActions(
	{
		[SAVE_EXPENSE]: (state = initialState, action) => {
			return {
				...state,
				data: [action.payload, ...state.data],
			}
		},
		[FETCH_EXPENSES_START]: (state = initialState, action) => {
			return {
				...state,
				isFetching: true,
			}
		},
		[FETCH_EXPENSES_SUCCESS]: (state = initialState, action) => {
			return {
				...state,
				isFetching: false,
				data: action.payload,
			}
		},
		[REMOVE_EXPENSE]: (state = initialState, action) => {
			return {
				...state,
				data: state.data.filter(({ _id }) => _id !== action.payload),
			}
		},
	},
	initialState,
)

export default expensesReducer
