import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './reducers/userReducer'
import expenses from './reducers/expensesReducer'

const rootReducer = combineReducers({
  form: formReducer,
  user,
  expenses,
  // categories,
  //
})
export default createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
