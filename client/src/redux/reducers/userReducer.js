import { handleActions } from 'redux-actions'
import { SET_UI_LOADING, SAVE_USER } from '../actions/types'

const initialState = {}

const userReducer = handleActions(
	{
		[SAVE_USER]: (state = initialState, action) => {
			return {
				...state,
				user: action.payload,
			}
		},
	},
	initialState,
)

export default userReducer
