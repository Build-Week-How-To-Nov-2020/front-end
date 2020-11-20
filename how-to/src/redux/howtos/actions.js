// import axios from "axios";
// import axiosWithAuth from '../../utilities/axiosWithAuth';

export const FETCH_HOWTOS = "FETCH_HOWTOS";
export const FETCH_HOWTOS_SUCCESS = "FETCH_HOWTOS_SUCCESS";
export const FETCH_HOWTOS_ERROR = "FETCH_HOWTOS_ERROR";

export const ADD_HOWTO = 'ADD_HOWTO';
export const ADD_HOWTO_SUCCESS = 'ADD_HOWTO_SUCCESS';
export const ADD_HOWTO_ERROR = 'ADD_HOWTO_ERROR';


export const fetchHowTos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_HOWTOS });
      // const res = await axiosWithAuth().get("https://jsonplaceholder.typicode.com/users");
      // const data = res.data();
      await new Promise(r => setTimeout(r, 2000));
      const data = require("../../mock-data/how-tos.json");
      dispatch({ type: FETCH_HOWTOS_SUCCESS, howTos: data.howTos });
    } catch (err) {
      dispatch({ type: FETCH_HOWTOS_ERROR, error: err });
    }
  };
};

// export const fetchHowTos = () => ({ type: FETCH_HOWTOS })
// export const fetchHowTosSuccess = (howTos) => ({ type: FETCH_HOWTOS_SUCCESS, howTos })

//action creator for Howtos
export const createHowTo = (title, content) => {
  return async (dispatch, state) => {
    try {
      const howTo = {
        title,
        content,
        // authorId: state.auth.user.id,
      };
      // const authorId = state.auth.user.id;
      await new Promise(r => setTimeout(r, 2000));
      // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: ADD_HOWTO, howTo: howTo });
    } catch (err) {
      dispatch({ type: FETCH_HOWTOS_ERROR, error: err });
    }
  };
};
