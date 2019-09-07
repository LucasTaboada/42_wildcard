import reducer from "../reducers/index";
import {createStore, applyMiddleaware, compose} from 'redux';

const store = createStore(reducer, compose(window.devToolsExtension ?
     window.devToolsExtension(): f => f));
export { store }