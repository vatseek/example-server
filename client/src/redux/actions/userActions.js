import { createAction } from 'redux-actions'
const FETCH_USER = 'FETCH_USER'

const fetchUser = createAction(FETCH_USER)

export { fetchUser }