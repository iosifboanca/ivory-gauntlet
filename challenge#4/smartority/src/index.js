import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import localForage from 'localforage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga'
import Amplify from 'aws-amplify'

import App from './App'
import reducer from './Reducer/reducer'
import saga from './Saga/saga'
import config from './Config/config'

import './index.css'

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITIY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [{
      name: 'testApi',
      endpoint: config.apiGateway.URL,
      region: config.apiGateway.REGION
    }
    ]
  }
})

localForage.config({
  driver: localForage.LOCALSTORAGE,
  name: 'Smartority',
  version: 0.1,
  storeName: 'globalState'
})

const persistConfig = {
  key: 'root',
  storage: localForage
}

const persistedReducer = persistReducer(persistConfig, reducer)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(saga)

ReactDOM.render(<Provider store={store}><PersistGate persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));

