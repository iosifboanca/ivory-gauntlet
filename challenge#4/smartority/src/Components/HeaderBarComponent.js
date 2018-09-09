import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'

import { doLogOut } from '../Actions/actions'

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href='/'>Home</a>
              </Navbar.Brand>
            </Navbar.Header>
              <Nav pullRight>
                <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Notes</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3} onClick={this.props.doLogOut}>Log out</MenuItem>
                </NavDropdown>
              </Nav>
        </Navbar>
      </div>
    )
  }
}

let mapDispatchToProps = {doLogOut}

export default connect(null, mapDispatchToProps)(HeaderComponent)

