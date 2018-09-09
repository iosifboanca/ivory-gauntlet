import React,{Component} from 'react'
import { connect } from 'react-redux'

import HeaderBar from '../Components/HeaderBarComponent'
import BodyNotesPage from '../Pages/BodyNotesPage'
class HomePage extends Component{
  render(){
    return(
      <div>
        <HeaderBar/>
        <div style={{display :'flex', justifyContent:'center'}}>
        <BodyNotesPage/>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state)=>({cognitoUser:state.cognitoUser})

export default connect(mapStateToProps,null)(HomePage)