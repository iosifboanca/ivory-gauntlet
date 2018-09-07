import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import localForage from 'localforage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import reducer from './Reducer/reducer'
import saga from './Saga/saga'

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

const persistedReducer = persistReducer(persistConfig,reducer)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(saga)

ReactDOM.render(<Provider store={store}><PersistGate persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));

