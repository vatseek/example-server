import { createAction } from 'redux-actions'
import {fetchUser} from './actions/userActions'
const FETCH_USER = 'FETCH_USER'

const fetchUser = createAction(FETCH_USER)

export { fetchUser }