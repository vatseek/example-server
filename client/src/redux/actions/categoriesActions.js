import { createAction } from 'redux-actions'
import {
  SAVE_CATEGORY,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_FAILURE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actions/types'

const insertCategory = createAction(SAVE_CATEGORY)
const getCategoriesStart = createAction(FETCH_CATEGORIES_START)
const getCategoriesSuccess = createAction(FETCH_CATEGORIES_SUCCESS)
const getCategoriesFailure = createAction(FETCH_CATEGORIES_FAILURE)
const removeCategorySuccess = createAction(REMOVE_CATEGORY_SUCCESS)
const removeCategoryFailure = createAction(REMOVE_CATEGORY_FAILURE)

export {
  insertCategory,
  removeCategorySuccess,
  removeCategoryFailure,
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
}
