import { handleActions } from 'redux-actions'
import { insertUser } from '../actions/userActions'

const initialState = {}

const userReducer = handleActions(
  {
    [insertUser]: (state = initialState, action) => {
      return {
        ...state,
        data: action.payload,
      }
    },
  },
  initialState,
)

export default userReducer
