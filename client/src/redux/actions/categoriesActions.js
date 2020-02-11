import { createAction } from 'redux-actions'
const SAVE_CATEGORY = 'SAVE_CATEGORY'
const GET_CATEGORIES_START = 'GET_CATEGORIES_START'
const GET_CATEGORIES_END = 'GET_CATEGORIES_END'
const DELETE_CATEGORY = 'DELETE_CATEGORY'

const insertCategory = createAction(SAVE_CATEGORY)
const GetCategoriesStart = createAction(GET_CATEGORIES_START)
const GetCategoriesEnd = createAction(GET_CATEGORIES_END)
const DeleteCategory= createAction(DELETE_CATEGORY)

export { insertCategory, GetCategoriesStart, GetCategoriesEnd, DeleteCategory}