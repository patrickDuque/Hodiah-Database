import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://hodiah-database.firebaseio.com'
});

export default instance;
