import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'

import { doLogOut } from '../Actions/actions'

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            Welcome {this.props.cognitoUser ? this.props.cognitoUser.username : ''}
            </Navbar.Brand>
              <Nav pullRight>
                <NavDropdown title="User" id="basic-nav-dropdown">
                  <MenuItem>Notes</MenuItem>
                  <MenuItem >Another action</MenuItem>
                  <MenuItem divider />
                  <MenuItem onClick={this.props.doLogOut}>Log out</MenuItem>
                </NavDropdown>
              </Nav>
        </Navbar>
      </div>
    )
  }
}
let mapStateToProps = state => ({cognitoUser: state.cognitoUser})
let mapDispatchToProps = {doLogOut}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

