import { handleActions } from 'redux-actions'
import { SAVE_CATEGORY } from '../actions/types'

const initialState = {
  data: [
    {
      name: '',
    },
  ],
}

const categoriesReducer = handleActions(
  {
    [SAVE_CATEGORY]: (state = initialState, action) => {
      return {
        ...state,
        data: [...state.data, { name: action.payload }],
      }
    },
  },
  initialState,
)

export default categoriesReducer
