import axios from 'axios'

const baseURL = 'https://api.chucknorris.io/jokes/';

export const Axios = axios.create({
  baseURL,
});