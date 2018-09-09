import { put, all, takeLatest } from 'redux-saga/effects'
import { cognitoUserToState } from '../Actions/actions'
import { Auth } from 'aws-amplify'

import CONSTANTS from '../Constants/constants'

const {DOLOGIN} = CONSTANTS

function* loginSaga() {
  try {
    console.log('ajunge aici')
    let cognitoUser = Auth.signIn(this.state.username, this.state.password)
      .then(user => { return user })
      .catch(err => console.log(err))
    yield put(cognitoUserToState(cognitoUser.value))
  } catch (error) {
    console.log(error)
  }
}

export default function* saga() {
  yield all([
    yield takeLatest(DOLOGIN,loginSaga)
  ])
}