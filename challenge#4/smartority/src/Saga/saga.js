import { put, all, takeLatest, select } from 'redux-saga/effects'
import { Auth } from 'aws-amplify'

import { cognitoUserToState, userLogin } from '../Actions/actions'
import CONSTANTS from '../Constants/constants'

const { PUTUSERTOSTATE } = CONSTANTS

function* loginSaga() {
  try {
    let cognitoUser = yield Auth.signIn(yield select((state) => state.user), yield select((state) => state.password))
      .then(user => user)
      .catch(err => err)
    if (cognitoUser.username) {
      yield put(userLogin())
      yield put(cognitoUserToState(cognitoUser))
    } 
  } catch (error) {
    alert(error.message)
  }
}

export default function* saga() {
  yield all([
    yield takeLatest(PUTUSERTOSTATE, loginSaga)
  ])
}