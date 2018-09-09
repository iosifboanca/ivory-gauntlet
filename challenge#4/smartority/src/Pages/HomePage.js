import React,{Component} from 'react'
import { connect } from 'react-redux'

class HomePage extends Component{
  render(){
    return(
      <div>
        <h1>Hello {this.props.cognitoUser.username}!</h1>
      </div>
    )
  }
}

let mapStateToProps = (state)=>({cognitoUser:state.cognitoUser})

export default connect(mapStateToProps,null)(HomePage)