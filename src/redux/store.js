import { legacy_createStore } from "redux";

import { compose } from "redux";
import { reducer } from "./action.reducer";
const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(reducer, composeEnhanser());
