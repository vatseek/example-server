import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import LoginForm from './components/user/LoginForm'
import ExpenseForm from './components/expense/ExpenseForm'
import Expenses from './components/expense/Expenses'
import CategoryForm from './components/category/CategoryForm'
import Categories from './components/category/Categories'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/expenses/create' component={ExpenseForm} />
            <Route exact path='/expenses' component={Expenses} />
            <Route exact path='/categories/create' component={CategoryForm} />
            <Route exact path='/categories' component={Categories} />
            <Route path='/' component={LoginForm} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
