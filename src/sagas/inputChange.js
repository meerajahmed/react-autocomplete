import {delay} from 'redux-saga'
import {call, takeLatest} from 'redux-saga/effects'
import {INPUT_CHANGED} from '../actions/inputChanged';

function* handleChange() {
  yield call(delay, 500);
}

export default function* watchInput() {
  yield takeLatest(INPUT_CHANGED, handleChange)
}