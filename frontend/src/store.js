import { applyMiddleware, compose, createStore } from "redux";
import { Reducers } from "./_reducers";
import thunk from 'redux-thunk';

const initial = {};


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(  Reducers, initial , composeEnhancer(applyMiddleware(thunk)) );