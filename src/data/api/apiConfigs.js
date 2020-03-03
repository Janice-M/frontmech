
import axios from 'axios';


const apiURL = 'https://mechbackend.herokuapp.com/api'

const instance = axios.create({
  baseURL : `${apiURL}`,
  timeout : 1500,
  headers : {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

export {
  instance
}
