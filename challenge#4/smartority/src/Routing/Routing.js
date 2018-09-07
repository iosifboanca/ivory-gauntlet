import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LoggedInRoute from '../Routing/LoggedInRoute'
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'

class Routing extends Component {
  routeToLogInPage = () => !this.props.isLoggedIn ? <LoginPage /> : <LoginPage />

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/login' render={this.routeToLogInPage} />
            <LoggedInRoute exact path='/' logged={this.props.isLoggedIn} component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, null)(Routing)