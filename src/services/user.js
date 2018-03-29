import axios from  'axios';

const API_URL = 'http://localhost:3000';

export { signupUser, loginUser };

function signupUser(data) {
  const url = `${API_URL}/api/signin`;
  console.log(data)
  return axios.post(url, data)
  .then(response => {
  	return response.data
  })
  .catch(error => {
  	return error
  })
}

function loginUser(data) {
  const url = `${API_URL}/api/login`;
  console.log(data)
  return axios.post(url, data)
  .then(response => {
  	return response.data
  })
  .catch(error => { 
  	return error
  })
}