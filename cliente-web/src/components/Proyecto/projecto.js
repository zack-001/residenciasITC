import axios from 'axios'


    export const  register = (newProject, token) => {
axios.defaults.headers.common['Authorization'] = token;
        /*const options = {
            headers: {"Authorization": `Bearer ${token}`},
          };*/
    
      return axios.post('http://localhost:8000/api/proyectos', {
                empresa: newProject.empresa,
                ciclo: newProject.ciclo,
                asesor_ext: newProject.asesor_ext,
                nombre: newProject.nombre,
                proyecto_dir: newProject.proyecto_dir,
                num_residentes: newProject.num_residentes,
                status: newProject.status
            }).then(response => { 
              return response
            })
            .catch(error => {
                console.log(error.response)
            })
    }    

    export const  update = (newProject, token, id) => {
        axios.defaults.headers.common['Authorization'] = token;
                /*const options = {
                    headers: {"Authorization": `Bearer ${token}`},
                  };*/
            
              return axios.put('http://localhost:8000/api/proyectos/'+id, {
                        empresa: newProject.empresa,
                        ciclo: newProject.ciclo,
                        asesor_ext: newProject.asesor_ext,
                        nombre: newProject.nombre,
                        proyecto_dir: newProject.proyecto_dir,
                       // num_residentes: newProject.num_residentes,
                        status: newProject.status
                    }).then(response => { 
                      return response
                    })
                    .catch(error => {
                        console.log(error.response)
                    })
            }    
        

    export const getProyecto= (e, id)=>{
        axios.get('http://localhost:8000/api/proyectos/'+id)
      .then(res => res.data).then(  
        (result)=>{  
            console.log(result.proyecto);
            e.setState({  
                proyecto:result.proyecto,
                status: result.status 
            });  
        },  
        (error)=>{  
            e.setState({error});  
        })    
    }

    export const getProyectos= (e)=>{
        axios.get('http://localhost:8000/api/proyectos')
      .then(res => res.data).then(  
        (result)=>{  
            console.log(result);
            e.setState({  
                proyecto:result.proyecto,
                alumnos: result.proyecto.alumno,
                seguimiento: result.proyecto.seguimiento,
                status: result.status 
            });  
        },  
        (error)=>{  
            e.setState({error});  
        })    
    }

    export const  destroy = (token, id) => {
        axios.defaults.headers.common['Authorization'] = token;
        return axios.delete('http://localhost:8000/api/proyectos/'+id).then(response => { 
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

