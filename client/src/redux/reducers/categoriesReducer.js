import { handleActions } from 'redux-actions'
import {
  insertCategory,
  removeCategorySuccess,
  removeCategoryFailure,
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
} from '../actions/categoriesActions'

const initialState = {
  data: [],
  isFetching: false,
  error: null,
}

const categoriesReducer = handleActions(
  {
    [insertCategory]: (state = initialState, action) => {
      return {
        ...state,
        data: [...state.data, { name: action.payload }],
      }
    },
    [getCategoriesStart]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: true,
      }
    },
    [getCategoriesSuccess]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }
    },
    [getCategoriesFailure]: (state = initialState, action) => {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    },
    [removeCategorySuccess]: (state = initialState, action) => {
      return {
        ...state,
        data: state.data.filter(({ _id }) => _id !== action.payload),
      }
    },
    [removeCategoryFailure]: (state = initialState, action) => {
      return {
        ...state,
        error: action.payload,
      }
    },
  },
  initialState,
)

export default categoriesReducer
