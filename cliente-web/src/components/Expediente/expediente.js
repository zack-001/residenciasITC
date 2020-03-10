import axios from 'axios'

export const  update = (id, formData, token) => {
    axios.defaults.headers.common['Authorization'] = token;
    const config = {    
        headers: {'content-type': 'multipart/form-data'},    
    };    
    console.log(formData.get('doc_dir'));
    return axios.put(`http://localhost:8000/api/expedientes/`+id, {
     nombre: formData.get('nombre'), descripcion: formData.get('descripcion'), doc_dir:formData.get('doc_dir'), user_id:formData.get('user_id')} 
    ).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error.response)
    })
}
export const  destroy = (token, id) => {
    axios.defaults.headers.common['Authorization'] = token;
    return axios.delete('http://localhost:8000/api/expedientes/'+id).then(response => { 
        console.log(response);
        return response;
    }).catch(error => {
            console.log(error.response)
    })
}
    /*export const  register = (newFile, token) => {
        axios.defaults.headers.common['Authorization'] = token;
       /* return axios.post('http://localhost:8000/api/expedientes',newFile,
        ).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        })
    }*/
      /*return axios.post('http://localhost:8000/api/expedientes',{
            nombre: newFile.nombre,
            doc_dir: newFile.doc_dir,
            descripcion: newFile.descripcion,
        },
        ).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        })
    }*/

    /*,
        {headers: {'content-type': 'multipart/form-data' }}*/ 




export const busqueda = ( busqueda, token, e) => {
    axios.defaults.headers.common['Authorization'] = token;
    return axios.post('http://localhost:8000/api/expediente/busqueda', {
        busqueda:busqueda.busqueda
        }).then(res=> res.data).then(  
            (result)=>{  
                console.log(result);
                 e.setState({  
                    expediente:result.expediente,
                    statusExp: result.status 
                });  
            },  
            (error)=>{  
                e.setState({error});  
            })
    }        

    export const getExpedientes= (token, e)=>{
        axios.defaults.headers.common['Authorization'] = token;
        axios.get('http://localhost:8000/api/expedientes')
      .then(res => res.data).then(  
        (result)=>{  
            console.log(result);
            e.setState({  
                expediente:result.expediente,
                statusExp: result.status 
            });  
        },  
        (error)=>{  
            e.setState({error});  
        })    
    }
    export const getProyecto= (e, id)=>{
      return  axios.get('http://localhost:8000/api/proyectos/'+id)
      .then(res => res.data).then(  
        (result)=>{  
            return result  
        },  
        (error)=>{  
            return error 
        })    
    }
