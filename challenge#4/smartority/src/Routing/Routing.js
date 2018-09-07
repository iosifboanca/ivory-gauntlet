import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LoginPage from '../Pages/LoginPage'

  class Routing extends Component {
    render() {
      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route path='/login' render={LoginPage} />
            </Switch>
          </BrowserRouter>
        </div>
      )
    }
  }

export default connect(null, null)(Routing)