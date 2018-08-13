import {delay} from 'redux-saga'
import {call, put, takeLatest} from 'redux-saga/effects'
import {INPUT_CHANGE} from '../actions/inputChange';
import setFilterText from "../actions/setFilterText";

function* handleChange({payload: {filterText}}) {
  yield call(delay, 1000); // debounce by 1s
  yield put(setFilterText(filterText));
}

export default function* watchInput() {
  yield takeLatest(INPUT_CHANGE, handleChange)
}