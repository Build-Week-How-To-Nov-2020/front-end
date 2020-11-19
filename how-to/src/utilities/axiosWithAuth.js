import axios from 'axios';

export const axiosWithAuth = () => {
  // Set token in local storage
  const token = localStorage.getItem("token");
  return axios.create({
    //pass token through header
    headers: {
      Authorization: token,
    },
    //set base url for easier requests
    baseURL: "https://how-to-nov-2020.herokuapp.com/",
  });
};