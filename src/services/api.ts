import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', //endereço do backend api
});

export default api;
