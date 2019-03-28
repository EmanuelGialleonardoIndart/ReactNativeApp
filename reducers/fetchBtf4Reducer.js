import { FETCH_ATTEMPT,FETCH_SUCCESS,FETCH_FAIL } from "../actions/types";

const initialState={
    error:false,
    data:[],
    attempt:false,
    message:''
}
export default function(state = initialState, action){
    switch(action.type) {
        case FETCH_ATTEMPT:
            return {
                ...state,
                attempt:true,
                error:false,
                message:''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                attempt:false,
                error:false,
                data:action.payload
            }
        case FETCH_FAIL:
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