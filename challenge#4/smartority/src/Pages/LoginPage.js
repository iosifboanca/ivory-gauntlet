import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userLogin, cognitoUserToState, putUserToState } from '../Actions/actions'
import RegisterComponent from '../Components/RegisterComponent'
class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      register: false
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.putUserToState([this.state.username,this.state.password])

  }
  onChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }
  makeRegisterAppear = () =>{
    this.setState({register: !this.state.register})
  }
  render() {
    return (
      <div className='form-style-6'>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <input autoFocus type="text" id="username" placeholder="E-mail Address" value={this.state.username} onChange={this.onChange} />
          <input autoFocus type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.makeRegisterAppear}> Register</button>
        {this.state.register ? <RegisterComponent/> : <div/>}
      </div>
    )
  }
}

let mapDispatchToProps = { userLogin, cognitoUserToState, putUserToState }
let mapStateToProps = state => ({ cognitoUser: state.cognitoUser, isLoggedIn: state.isLoggedIn })

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

