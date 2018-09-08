import React, { Component } from 'react'
import { Auth } from 'aws-amplify'

class RegisterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleSubmit = async event => {
    event.preventDefault()
    try {
      await Auth.signUp({
        username: this.state.username,
        password: this.state.password
      })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
  }
  onChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.handleSubmit}>
          <input autoFocus type="text" id="username" placeholder="E-mail Address" value={this.state.username} onChange={this.onChange} />
          <input autoFocus type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
          <input type="submit" value="Create User" />
        </form>
      </div>
    )
  }
}
export default RegisterComponent