import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userfrom './reducers/userReducer'

const rootReducer = combineReducers({
  form: formReducer,
  user
  //
})
export default createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
