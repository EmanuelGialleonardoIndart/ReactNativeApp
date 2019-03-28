import {combineReducers} from 'redux';
import loginReducers from "./loginReducers";
import fetchBtf4Reducer from "./fetchBtf4Reducer";

export default combineReducers({
    login:loginReducers,
    btf4:fetchBtf4Reducer
});