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
storeData = async (token,dispatch) => {
    try {
      await AsyncStorage.setItem('token', token);
      dispatch(login_succes());
      Alert.alert("login","Login succesfull")
    } catch (e) {
      dispatch(login_fail("something happend, try again later.."));
    }
  }

export const login=(credentials)=>{
     return(dispatch)=>{
         dispatch(login_attempt());
         loginCall(credentials)
            .then(([response,json])=>{
                if(response.status===200){                  
                    console.log(json.token);
                    storeData(json.token,dispatch);  
                }else{    
                    dispatch(login_fail(json.message));
                }
            })
            .catch((error)=>{
                console.log(error);
            })
     }
}