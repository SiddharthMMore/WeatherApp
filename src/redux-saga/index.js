import { put, takeLatest, all, call, takeEvery } from 'redux-saga/effects';
import { FETCH_WEATHER, WEATHER_FETCHED } from '../actions/types';
import fetchWeatherApi from '../api/fetchWeatherApi';
function* fetchWeather(action) {
  console.log('Saga action');
  console.log(action);
  const response = yield call(fetchWeatherApi, action.cityName);
  yield put({ type: WEATHER_FETCHED, payload: response.data });
}
function* actionWatcher() {
  yield takeEvery(FETCH_WEATHER, fetchWeather);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
