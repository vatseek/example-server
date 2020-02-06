import { createAction } from 'redux-actions'
import { SAVE_USER } from './types'

const saveUser = createAction(SAVE_USER)

export { saveUser }
