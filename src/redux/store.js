import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'

import reducer from './reducer.js'

const delay = ms => (new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, ms)
}))

const sagaMiddleware = createSagaMiddleware()

function* getInfo () {
  console.log('一秒后获取用户信息')
  yield delay(1000)
  console.log('获取了用户信息')
}

function* rootSaga () {
  yield takeEvery('asyncGetInfo', getInfo)
}

var store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
