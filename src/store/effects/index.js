import { all, fork } from "redux-saga/effects";

import weatherSaga from "./getWeatherDataEffects";


export default function* rootSaga() {
  yield all([fork(weatherSaga)]);
}
