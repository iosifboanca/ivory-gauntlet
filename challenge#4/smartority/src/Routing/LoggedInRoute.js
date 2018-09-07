import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const LoggedInRoute = ({ component: Component, ...otherProps }) => (
  <Route {...otherProps} render={props => (
    otherProps.logged ?
      <Component {...props} />
      : <Redirect to='/login' />)} />
)
export default LoggedInRoute