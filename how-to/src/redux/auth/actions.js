import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_START });
      const url = "https://how-to-nov-2020.herokuapp.com/user/signin";
      const res = await axios.post(url, {
        username,
        password,
      });
      const token = res.data.token;
      dispatch({ 
        type: LOGIN_SUCCESS, 
        token: token 
      });
    } catch (err) {
      dispatch({ 
        type: LOGIN_ERROR,
        error: err 
      });
      throw err;
    }
  };
};
