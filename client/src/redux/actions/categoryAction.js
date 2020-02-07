import { createAction } from 'redux-actions'
const FETCH_CATEGORYE = 'FETCH_CATEGORY'

const fetchCategory = createAction(FETCH_CATEGORY)

export { fetchCategory }