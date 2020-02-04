import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import LoginForm from './LoginForm'
import SimpleForm from './components/Signin'
import ExpenseForm from './components/Expense'
import Home from './Home'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path='/loginform' component={LoginForm} />
						<Route exact path='/form' component={SimpleForm} />
						<Route exact path='/expense' component={ExpenseForm} />
						<Route exact path='/home' component={Home} />
						<Route path='/' component={LoginForm} />
					</Switch>
				</Router>
			</Provider>
		)
	}
}

export default App
