import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actiontypes/auth.types";

export const authlogin = (params) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(
      `https://backenddanaoscruise-production-ed75.up.railway.app/user/login`,
      params
    )
    .then((r) => {
      localStorage.setItem("auth", JSON.stringify(r.data));
      dispatch({ type: LOGIN_SUCCESS, payload: r.data.token });
      return LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
      return LOGIN_FAILURE;
    });
};
