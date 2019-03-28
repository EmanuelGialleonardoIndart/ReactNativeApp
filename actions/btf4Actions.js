import { FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_FAIL } from "./types";
import { btf4UsersCall } from "../api";

export const fetch_attempt = () => {
  return { type: FETCH_ATTEMPT };
};
export const fetch_succes = data => {
  return { type: FETCH_SUCCESS, payload: data };
};
export const fetch_fail = message => {
  return { type: FETCH_FAIL, payload: message };
};

export const fetchBtf4Players = () => {
  return dispatch => {
    dispatch(fetch_attempt());
    btf4UsersCall()
      .then(([response, json]) => {
        if (response.status === 200) {
          dispatch(fetch_succes(json));
        } else {
          dispatch(fetch_fail("something happend... try again later"));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
