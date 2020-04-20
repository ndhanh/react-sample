import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.payload.url);
    yield put({ type: "DATA_LOADED_SAGA", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}
