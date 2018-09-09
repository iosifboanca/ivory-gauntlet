import React,{Component} from 'react'
import { connect } from 'react-redux'

import HeaderBar from '../Components/HeaderBarComponent'
class HomePage extends Component{
  render(){
    return(
      <div>
        <HeaderBar/>
        <h1>Hello {this.props.cognitoUser ? this.props.cognitoUser.username : 'ceva'}!</h1>
      </div>
    )
  }
}

let mapStateToProps = (state)=>({cognitoUser:state.cognitoUser})

export default connect(mapStateToProps,null)(HomePage)