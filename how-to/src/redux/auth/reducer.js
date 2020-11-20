import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from "./actions";

const initialState = {
  isLoggingIn: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.token)
      return {
        ...state,
        isLoggingIn: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggingIn: false,
        error: action.error,
      };
     

    default:
      return state;
  }
}

