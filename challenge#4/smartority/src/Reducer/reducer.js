import CONSTANTS from '../Constants/constants'

let { DOLOGIN, COGNITO_USER_TO_STATE, PUTUSERTOSTATE } = CONSTANTS

let globalState = {
  isLoggedIn: false,
  user: {},
  password: {},
  cognitoUser : {}
}

const reducer = (state = globalState, action) =>{
  switch (action.type){
    case DOLOGIN:
      return {
        ...state,
        isLoggedIn: action.payload
      }
    case COGNITO_USER_TO_STATE:
      return {
        ...state,
        cognitoUser: action.payload
      }
    case PUTUSERTOSTATE:
      return {
        ...state,
        user: action.payload[0],
        password: action.payload[1]
      }
    default:
      return state
  }
}

export default reducer