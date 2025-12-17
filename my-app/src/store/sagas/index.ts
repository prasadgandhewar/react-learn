import { all } from 'redux-saga/effects'
import counterSaga from './counterSaga'

function* rootSaga() {
    console.log("root saga");
    yield all([
        counterSaga()
    ])
}

export default rootSaga