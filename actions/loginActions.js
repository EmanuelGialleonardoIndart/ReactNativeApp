import { LOGIN_ATTEMPT, LOGIN_SUCCES, LOGIN_FAIL } from "./types";
import {loginCall} from '../api';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const login_attempt=()=>{
    return {type:LOGIN_ATTEMPT}
}
export const login_succes=()=>{
    return {type:LOGIN_SUCCES}
}
export const login_fail=(message)=>{
    return {type:LOGIN_FAIL,payload:message}
}
storeData = async (token,dispatch,navigation) => {
    try {
      await AsyncStorage.setItem('token', token);
      dispatch(login_succes());
      navigation.navigate("mainScreen");
    } catch (e) {
      dispatch(login_fail("something happend, try again later.."));
    }
  }

export const login=(credentials,navigation)=>{
     return(dispatch)=>{
         dispatch(login_attempt());
         loginCall(credentials)
            .then(([response,json])=>{
                if(response.status===200){ 
                    storeData(json.token,dispatch,navigation);  
                }else{    
                    dispatch(login_fail(json.message));
                }
            })
            .catch((error)=>{
                console.log(error);
            })
     }
}