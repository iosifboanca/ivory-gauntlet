import CONSTANTS from '../Constants/constants'

let { DOLOGIN } = CONSTANTS

let globalState = {
  user: {},
}

const reducer = (state = globalState, action) =>{
  switch (action.type){
    case DOLOGIN:
      return {
        ...state,
        isLoggedIn: action.payload
      }
    default:
      return state
  }
}

export default reducer