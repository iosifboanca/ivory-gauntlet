import CONSTANTS from '../Constants/constants'

let { DOLOGIN, COGNITO_USER_TO_STATE, PUTUSERTOSTATE, LOGOUT, PUSHNOTESTOSTATE} = CONSTANTS

export const userLogin = () => ({
  type: DOLOGIN,
  payload: true
})

export const cognitoUserToState = (user) =>({
  type: COGNITO_USER_TO_STATE,
  payload: user
})

export const putUserToState = (userData) => ({
  type: PUTUSERTOSTATE,
  payload: userData
})

export const doLogOut = () =>({
  type: LOGOUT,
  payload: false
})

export const putNotesToState = (notes) =>({
  type: PUSHNOTESTOSTATE,
  payload: notes
})