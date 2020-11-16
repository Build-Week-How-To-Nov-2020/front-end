import axios from "axios";


export const fetchHowTos = async () => {
  try {
    const data = require('../mock-data/how-tos.json');
    console.log(data);
    return data.howTos
    // const url = '';
    // const response = await axios.get(url);
    // console.log(response.data);
  } catch (ex) {
    console.log(ex);
  }
};
