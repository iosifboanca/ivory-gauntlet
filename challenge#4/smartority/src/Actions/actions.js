import CONSTANTS from '../Constants/constants'

let { DOLOGIN } = CONSTANTS

export const userLogin = () => ({
  type: DOLOGIN,
  payload: true
})