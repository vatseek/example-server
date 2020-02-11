import { createAction } from 'redux-actions'
import { SAVE_USER } from './types'

const insertUser = createAction(SAVE_USER)

export { insertUser }
