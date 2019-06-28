import { put, takeLatest } from "redux-saga/effects";
import { REQUEST_DATA, RECEIVE_DATA } from "../actions/weatherActions";
import fetchData from "../../axios/weatherApi";

function* getData(action) {
  try {
    const response = fetchData.get(`data/2.5/weather?`, {
      params: {
        q: `${action.payload}`,
        APPID: "b712b9a9b0785a9842d7c7ba49f37a5f"
      }
    });
    yield put({ type: RECEIVE_DATA, response });
  } catch (e) {
    console.log(e);
  }
}

export default function* loadData() {
  yield takeLatest(REQUEST_DATA, getData);
}
