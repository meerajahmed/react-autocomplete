import {fork} from 'redux-saga/effects';
import inputChange from "./inputChange";

export default function* rootSaga() {
  yield fork(inputChange);
}