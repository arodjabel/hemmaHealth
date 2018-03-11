import { combineReducers } from 'redux';
import {setHomeContentReducer} from "./home/homeReducers";

const appReducer = combineReducers({
  setHomeContent:setHomeContentReducer
});

export default appReducer;