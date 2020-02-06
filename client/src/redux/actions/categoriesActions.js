import { createAction } from 'redux-actions'
import { SAVE_CATEGORY } from './types'

const saveCategory = createAction(SAVE_CATEGORY)

export { saveCategory }
