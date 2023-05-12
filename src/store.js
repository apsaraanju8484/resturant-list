import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./reducers/homeReducers";

const reducers = combineReducers({
 restaurantReducer : homeReducer
})

const middleWare = [thunk]
const store = createStore (reducers, applyMiddleware(...middleWare))

export default store