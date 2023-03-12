import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as todo} from "./todo/reducer"
import thunk from "redux-thunk"
const allreducers=combineReducers({
    todos:todo
})

export const store=legacy_createStore(allreducers,applyMiddleware(thunk))