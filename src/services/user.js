import axios from  'axios';

const API_URL = 'http://localhost:3030';

export { signupUser, loginUser };

function signupUser(data) {
  const url = `${API_URL}/auth/register`;
  return axios.post(url, data)
  .then(response => {
  	return response.data
  })
  .catch(error => {
  	return error
  })
}

function loginUser(data) {
  const url = `${API_URL}/auth/login`;
  return axios.post(url, data)
  .then(response => {
  	return response.data
  })
  .catch(error => { 
  	return error
  })
}