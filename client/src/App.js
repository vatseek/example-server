import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import LoginForm from './LoginForm'
import Home from './Home'

class App extends React.Component {
    render() {
        return (
          <Router>
          <Switch>
            <Route exact path='/loginform' component={LoginForm} />
            <Route exact path='/home' component={Home} />
            <Route path='/' component={LoginForm} />
          </Switch>
          </Router>
        )
    }
}

export default App ; 