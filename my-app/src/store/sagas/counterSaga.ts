import { call, put, takeLatest } from "redux-saga/effects";
import { increment, incrementByAmount, modifyCount } from "../slices/counterSlice";
import incrementCounter from "../../apis/CounterApi";
import { SagaIterator } from "redux-saga";



function* handleIncrementCounter(action: any): SagaIterator  {
    const value = yield call(incrementCounter, action.payload);
    console.log("inside saga-" + value);
    yield put((incrementByAmount(value)));
}

function* counterSaga() {
    console.log("increment.type - "+ increment.type)
    yield takeLatest(modifyCount.type, handleIncrementCounter)
}

export default counterSaga;