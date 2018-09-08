import { call, put } from 'redux-saga/effects'
import { cognitoUserToState } from '../Actions/actions'
import { Auth } from 'aws-amplify'


function* loginSaga() {
  try {
    let cognitoUser = Auth.signIn(this.state.username, this.state.password)
      .then(user => { console.log(user); return user })
      .catch(err => console.log(err))
    console.log(cognitoUser)
    yield put(cognitoUserToState(cognitoUser.value))
  } catch (error) {
    console.log(error)
  }
}

export default function* saga() {
  yield call(loginSaga)
}