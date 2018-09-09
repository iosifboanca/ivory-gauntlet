import { put, all, takeLatest, select } from 'redux-saga/effects'
import { cognitoUserToState } from '../Actions/actions'
import { Auth } from 'aws-amplify'

import CONSTANTS from '../Constants/constants'

const {DOLOGIN} = CONSTANTS

function* loginSaga() {
  try {
    let cognitoUser = yield Auth.signIn(yield select((state)=> state.user), yield select((state)=> state.password))
      .then(user => user )
      .catch(err => console.log(err))
    yield put(cognitoUserToState(cognitoUser))
  } catch (error) {
    console.log(error)
  }
}

export default function* saga() {
  yield all([
    yield takeLatest(DOLOGIN,loginSaga)
  ])
}