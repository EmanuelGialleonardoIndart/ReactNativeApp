import { LOGIN_ATTEMPT,LOGIN_SUCCES,LOGIN_FAIL } from "../actions/types";
import AsyncStorage from '@react-native-community/async-storage';

const initialState={
    loggedIn:AsyncStorage.getItem("token")?true:false,
    error:false,
    attempt:false,
    message:''
}
export default function(state = initialState, action){
    switch(action.type) {
        case LOGIN_ATTEMPT:
            return {
                ...state,
                attempt:true,
                error:false,
                message:''
            }
        case LOGIN_SUCCES:
            return {
                ...state,
                attempt:false,
                error:false,
                loggedIn:true
            }
        case LOGIN_FAIL:
            return {
                ...state,
                attempt:false,
                loggedIn:false,
                error:true,
                message:action.payload
            }    
        default:
            return state;    
        }
    }          