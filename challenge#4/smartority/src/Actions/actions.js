import CONSTANTS from '../Constants/constants'

let { DOLOGIN, COGNITO_USER_TO_STATE } = CONSTANTS

export const userLogin = () => ({
  type: DOLOGIN,
  payload: true
})

export const cognitoUserToState = (user) =>({
  type: COGNITO_USER_TO_STATE,
  payload: user
})