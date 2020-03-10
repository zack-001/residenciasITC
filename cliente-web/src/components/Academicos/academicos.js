import axios from 'axios'

export const  register = (newData,  token) => {
    axios.defaults.headers.common['Authorization'] = token;
    return axios.post('http://localhost:8000/api/academicos', {
        nombre: newData.nombre,
        apellido_pat: newData.apellido_pat,
        apellido_mat: newData.apellido_mat,
        matricula: newData.matricula,  
        puesto: newData.puesto             
        }).then(response => { 
          return response
        }).catch(error => {
            console.log(error.response)
        })
}    

export const  update = (newData, token, id) => {
    axios.defaults.headers.common['Authorization'] = token;            
    return axios.put('http://localhost:8000/api/academicos/'+id, {
        nombre: newData.nombre,
        apellido_pat: newData.apellido_pat,
        apellido_mat: newData.apellido_mat,
        matricula: newData.matricula,  
        puesto: newData.puesto      
    }).then(response => { 
      return response
    }).catch(error => {
        console.log(error.response)
    })
}    
        

    export const getAcademico= (e, id)=>{
        axios.get('http://localhost:8000/api/academicos/'+id)
      .then(res => res.data).then(  
        (result)=>{  
            console.log(result);
            e.setState({  
                user:result.academico
            });  
        }).catch(error => {
                console.log(error.response)
        })  
    }

    export const listAcademicos= (e)=>{
        axios.get('http://localhost:8000/api/academicos')
      .then(res => res.data).then(  
        (result)=>{  
            console.log(result);
            e.setState({  
                usuarios:result.academico,
                status: result.status 
            });  
        },  
        (error)=>{  
            e.setState({error});  
        })    
    }


    export const  destroy = (token, id) => {axios.defaults.headers.common['Authorization'] = token;
        axios.defaults.headers.common['Authorization'] = token;
        return axios.delete('http://localhost:8000/api/academicos/'+id).then(response => { 
            console.log(response);
            return response;
        }).catch(error => {
                console.log(error.response)
        })
    }    
     
    export const busqueda = ( newSearch, token, e) => {
        axios.defaults.headers.common['Authorization'] = token;
        return axios.post('http://localhost:8000/api/busqueda', {
            tipoBusqueda:newSearch.tipoBusqueda,
            busqueda:newSearch.busqueda
            }).then(res => res.data).then(  
                (result)=>{  
                    console.log(result);
                    e.setState({  
                        proyecto:result.proyecto,
                        //alumnos: result.proyecto.alumno,
                        //seguimiento: result.proyecto.seguimiento,
                        status: result.status 
                    });  
                },  
                (error)=>{  
                    e.setState({error});  
                })    /*then(response => { 
                console.log(response);
                return response;
            }).catch(error => {
                    console.log(error.response)
            })*/
    }

    export const getPersonal= (e)=>{
        axios.get('http://localhost:8000/api/personal')
      .then(res => res.data).then(  
        (result)=>{  
            console.log(result);
            e.setState({  
                personal:result.personal,
                status: result.status 
            });  
        },  
        (error)=>{  
            e.setState({error});  
        })    
    }
    export const  registerPersonal = (newData, token) => {
        axios.defaults.headers.common['Authorization'] = token;
        return axios.post('http://localhost:8000/api/academicos', {
            nombre: newData.nombre,
            puesto: newData.puesto,
                    
            }).then(response => { 
              return response
            }).catch(error => {
                console.log(error.response)
            })
    }    
    
    export const  updatePersonal = (newData, token, id) => {
        axios.defaults.headers.common['Authorization'] = token;            
        return axios.put('http://localhost:8000/api/personal/'+id, {
            nombre: newData.nombre,
            puesto: newData.puesto,    
            updated_by: newData.updated_by,
                    
        }).then(response => { 
          return response
        }).catch(error => {
            console.log(error.response)
        })
    }    
   /* export const getImage= ()=>{
       return axios.get('http://localhost:8000/api/getImage')
      .then(res =>{  
        console.log(res);
        return res.data;     
        })    
    }*/

    /*export const getImage = async(img) =>{
     await axios.get('http://localhost:8000/api/getImage')
        .then(res =>{  
          console.log(res);
          img = res.data;    
          })
    } */   
    