import axios from 'axios'


export const register = newUser => {
  /*
  return axios({
    method: 'POST',
    url: 'http://localhost:8000/api/register',
    headers:{ 'Content-Type':'application/json',
    Accept: 'application/json'},
    params: {
      email: newUser.email,
      password: newUser.password
    }
  })
    .then(response => {
      console.log(response)
    })*/
  
  return axios
  .post('http://localhost:8000/api/register', {
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log(response)
      
    })
}

export const login = user => {
 
  return axios
    .post('http://localhost:8000/api/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response);
      if(response.data.status){
        return response.data
      }else{
      localStorage.setItem('usertoken', response.data)
      return response.data
      }
    })
}

export function getIdentity () {
  let identity = JSON.parse(localStorage.getItem('identity'));
  if(identity !== "undefined"){
      this.identity = identity;
  }else{
      this.identity = null;
  }
  return this.identity;
}

export function getToken(){
  let token = localStorage.getItem('usertoken');
  if(token !== "undefined"){
      this.token = token;
  }else{
      this.token = null;
  }
  return this.token;
}

export const registeradmin = (newUser, token) => {
  axios.defaults.headers.common['Authorization'] = token;
  return axios
  .post('http://localhost:8000/api/register/admin', {
      email: newUser.email,
      password: newUser.password,
      rol: newUser.rol
    })
    .then(response => { 
      return response.data
    })
    .catch(error => {
        console.log(error.response)
    })
}
