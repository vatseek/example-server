import { createAction } from 'redux-actions'
import { SAVE_CATEGORY } from './types'

const insertCategory = createAction(SAVE_CATEGORY)

export { insertCategory }
