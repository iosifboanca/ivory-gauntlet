import CONSTANTS from '../Constants/constants'

let { DOLOGIN, COGNITO_USER_TO_STATE } = CONSTANTS

let globalState = {
  isLoggedIn: false,
  user: {},
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
    default:
      return state
  }
}

export default reducer