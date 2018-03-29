import axios from  'axios';

const API_URL = 'http://localhost:3000';

export { signinUser, loginUser };

function signinUser(data) {
  const url = `${API_URL}/api/signin`;
  return axios.post(url, data)
  .then(response => return response.data)
  .catch(error => return error)
}

function loginUser(data) {
  const url = `${API_URL}/api/login`;
  return axios.post(url, data)
  .then(response => return response.data)
  .catch(error => return error)
}