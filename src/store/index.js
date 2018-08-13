import {createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import reducer from '../reducers/filterText';

export const defaultState = '';

export default createStore(reducer, defaultState, devToolsEnhancer());