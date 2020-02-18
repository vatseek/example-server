import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import LoginForm from './components/user/LoginForm'
import SingInForm from './components/user/SingInForm'
import ExpenseForm from './components/expense/ExpenseForm'
import Expenses from './components/expense/Expenses'
import CategoryForm from './components/category/CategoryForm'
import Categories from './components/category/Categories'
import PageWrapper from './components/PageWrapper'
import Loader from './components/Loader'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Loader />
        <Router>
          <PageWrapper>
            <Switch>
              <Route exact path='/login' component={LoginForm} />
              <Route exact path='/register' component={SingInForm} />
              <Route exact path='/expenses/create' component={ExpenseForm} />
              <Route exact path='/expenses' component={Expenses} />
              <Route exact path='/categories/create' component={CategoryForm} />
              <Route exact path='/categories' component={Categories} />
              <Route path='/' component={LoginForm} />
            </Switch>
          </PageWrapper>
        </Router>
      </Provider>
    )
  }
}

export default App
