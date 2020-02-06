import { createAction } from 'redux-actions'
const SET_UI_LOADING = 'SET_UI_LOADING'

const startLoading = createAction(SET_UI_LOADING)

export { startLoading }
