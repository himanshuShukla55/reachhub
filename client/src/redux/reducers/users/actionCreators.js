import { toast } from "react-toastify";
import {
  USER_LOGIN_START,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./actions";
import axios from "axios";

export const userLoginStart = () => ({
  type: USER_LOGIN_START,
});

export const userLoginSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

export const userLoginFailed = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const loginUser = (values, resetForm) => async (dispatch) => {
  try {
    dispatch(userLoginStart());
    const { data } = await axios.post("/api/users/login", values);
    toast.success("Login Successfull!");
    dispatch(userLoginSuccess(data.data));
    resetForm();
  } catch (error) {
    dispatch(userLoginFailed(error.response.data));
    toast.error(error.response.data.message);
  }
};
