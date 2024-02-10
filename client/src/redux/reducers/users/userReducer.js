import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./actions";
const initialState = {
  loading: false,
  auth: false,
  user: null,
  error: null,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_START:
      return { ...state, loading: true, error: null };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: true,
        user: payload,
        error: null,
      };
    case USER_LOGIN_FAILED:
      return { ...state, loading: false, user: null, error: payload };
    case USER_LOGOUT:
      return { ...state, auth: false, user: null };
    default:
      return state;
  }
};
