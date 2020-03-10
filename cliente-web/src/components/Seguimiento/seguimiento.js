import axios from 'axios'

export const  register = (newStatus, token) => {
    axios.defaults.headers.common['Authorization'] = token;
    return axios.post('http://localhost:8000/api/seguimiento', {
        asesor_int: newStatus.asesor_int,
        status: newStatus.status,
        proyecto_id: newStatus.proyecto_id

    }).then(response => { 
        return response.data
    }).catch(error => {
        console.log(error.response)
    })
}

export const  update = (newStatus, token, id) => {
    axios.defaults.headers.common['Authorization'] = token;
    return axios.put('http://localhost:8000/api/seguimiento/'+id, {
        asesor_int: newStatus.asesor_int,
        status: newStatus.status
    }).then(response => { 
        return response.data
    }).catch(error => {
        console.log(error.response)
    })
}