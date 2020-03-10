import axios from 'axios'


    export const  register = (newStudent, token) => {
        axios.defaults.headers.common['Authorization'] = token;
    
      return axios.post('http://localhost:8000/api/alumnos', {
            nombre: newStudent.nombre,
            apellido_pat: newStudent.apellido_pat,
            apellido_mat: newStudent.apellido_mat,
            nc: newStudent.nc,
            telefono: newStudent.telefono,
            sexo: newStudent.sexo,
            carrera_id: newStudent.carrera_id
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        })
    }

    
    export const  update = (newStudent, token, id) => {
        axios.defaults.headers.common['Authorization'] = token;

        return axios.put('http://localhost:8000/api/alumnos/'+id, {
            nombre: newStudent.nombre,
            apellido_pat: newStudent.apellido_pat,
            apellido_mat: newStudent.apellido_mat,
            nc: newStudent.nc,
            telefono: newStudent.telefono,
            sexo: newStudent.sexo,
            carrera_id: newStudent.carrera_id
        }).then(response => { 
            return response
        }).catch(error => {
            console.log(error.response)
        })
    }    
        

    export const getAlumnos= (e, id)=>{
        axios.get('http://localhost:8000/api/alumnos/'+id)
      .then(res => res.data).then(  
        (result)=>{  
            console.log(result);
            e.setState({  
                alumnos:result.alumno,
                status: result.status 
            });  
        },  
        (error)=>{  
            e.setState({error});  
        })    
    }

    export const  destroyAlumno = (token, id) => {
        axios.defaults.headers.common['Authorization'] = token;
        return axios.delete('http://localhost:8000/api/alumnos/'+id).then(response => { 
            console.log(response);
            return response;
        }).catch(error => {
                console.log(error.response)
        })
    }    
      