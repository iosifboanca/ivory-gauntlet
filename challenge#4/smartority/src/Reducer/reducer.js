import CONSTANTS from '../Constants/constants'

let { PUSHNOTESTOSTATE, DOLOGIN, COGNITO_USER_TO_STATE, PUTUSERTOSTATE, LOGOUT } = CONSTANTS

let globalState = {
  isLoggedIn: false,
  user: {},
  password: {},
  cognitoUser : {},
  userNotes: []
}

const reducer = (state = globalState, action) =>{
  switch (action.type){
    case DOLOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
        cognitoUser: undefined
      }
    case LOGOUT:
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
    case PUSHNOTESTOSTATE:
      return {
        ...state,
        userNotes: action.payload
      }
    default:
      return state
  }
}

export default reducer