import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import SimpleForm from './components/User/Signin'
import AllExpenses from './components/Expense/AllExpenses'
import CreateExpense from './components/Expense/CreateExpense'
import AllCategories from './components/Category/AllCategories'
import CreateCategory from './components/Category/CreateCategory'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path='/login' component={SimpleForm} />
						<Route exact path='/expenses' component={AllExpenses} />
						<Route exact path='/expenses/create' component={CreateExpense} />
						<Route exact path="/categories" component={AllCategories} />
						<Route exact path="/categories/create" component={CreateCategory} />
            			<Route path='/' component={SimpleForm} />
					</Switch>
				</Router>
			</Provider>
		)
	}
}

export default App
