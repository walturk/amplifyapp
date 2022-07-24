import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import {
    GET_TRANSATION_LIST,
    GET_ORDRER_LIST
} from "./actionType";
import { CryptoApiResponseSuccess, CryptoApiResponseError } from "./action";

//Include Both Helper File with needed methods
import {
    getTransationList as getTransationListApi,
}
    from "../../helpers/fakebackend_helper";

function* getTransationList() {
    try {
        const response = yield call(getTransationListApi);
        yield put(CryptoApiResponseSuccess(GET_TRANSATION_LIST, response));
    } catch (error) {
        yield put(CryptoApiResponseError(GET_TRANSATION_LIST, error));
    }
}

export function* watchGetTransationList() {
    yield takeEvery(GET_TRANSATION_LIST, getTransationList);
}

function* cryptoSaga() {
    yield all([
        fork(watchGetTransationList),
    ]);
}

export default cryptoSaga;
