import { handleActions } from 'redux-actions'
import { SAVE_USER } from '../actions/types'

const initialState = {}

const userReducer = handleActions(
  {
    [SAVE_USER]: (state = initialState, action) => {
      return {
        ...state,
        data: action.payload,
      }
    },
  },
  initialState,
)

export default userReducer
