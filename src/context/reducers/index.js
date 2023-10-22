import CounterReducer from "./CounterReducer";
import UserReducer from "./UserReducer";

import { combineReducers } from "redux";

const myReducers = combineReducers({
  counter: CounterReducer,
  user: UserReducer
});

export default myReducers;
