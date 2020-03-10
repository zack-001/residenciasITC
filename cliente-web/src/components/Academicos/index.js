import React from 'react'
import {getAcademico} from './academicos'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import {FaInfoCircle} from 'react-icons/fa'

export default class Index extends React.Component{
    constructor(props){
    super(props)
        this.state = {
          show: false,
          errors: {},
          id: '',
          user: [],
          status:[],
          email: '',
          rol:'',
          file:''
        }
        
    }
    
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);  
    console.log(decoded);
    this.setState({email: decoded.email,
    rol: decoded.rol})
    getAcademico(this, decoded.sub);
  }

  setFile(e) {    
    this.setState({ file: e.target.files[0] });  
   }  
   submit(e) {    
    e.preventDefault();  
    const token = localStorage.usertoken  
    const url = `http://localhost:8000/api/actualizarFondo`;
    const formData = new FormData();    
    
   axios.defaults.headers.common['Authorization'] = token;  

    const config = {    
      headers: {'content-type': 'multipart/form-data',}    
    };    
    formData.append('doc_dir', this.state.file,) 
    console.log(formData.get('doc_dir'))
    return axios.post(url,formData, config).then(response => {
      console.log(response);
      if(response.data.status === 'success'){
        alert('El membrete de los reporte ha sido actualizado exitosamente!')
      }else{
        alert("No se ha podido actualizar la imagen");
      }
    });

  }
  

    render(){
        const{user, status}=this.state; 

        return(
        <div className="container-fluid">
        <div className="py-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Perfil</h1>
            <hr className="my-4"></hr>  
          </div>
          {console.log(user)}
          {!user ?
          <div class="alert alert-success">
          <strong>Atencion!</strong> Para terminar su registro correctamente <a href="/academicos/registro" class="alert-link"> rellene este formulario</a>.}
          </div> 
          :      
          <div>
          <div className="row">
             <h4 className="col-sm d-flex justify-content-between align-items-center mb-3"><span className="text-muted">USUARIO:</span></h4>
            </div>
              <div align='left' className="col-12 col-md-8" style={{marginBottom: '30px'}} >  
              <div className="row">
                <div className='col-sm' align='left '><h6 >EMAIL:</h6></div>
                <div className='col-sm' align='rigt '><h6> {this.state.email}</h6></div>
               </div>                
               <div className="row">
                <div className='col-sm' align='left '><h6 >ROL:</h6></div>
                <div className='col-sm' align='rigt '><h6> {this.state.rol}</h6></div>
               </div>
              </div>
              <div className="row">
             <h4 className="col-sm d-flex justify-content-between align-items-center mb-3"><span className="text-muted">INFORMACION PERSONAL:</span></h4>
            </div>
              <div align='left' className="col-12 col-md-8" style={{marginBottom: '30px'}} >  
              <div className="row">
                <div className='col-sm' align='left '><h6 >NOMBRE:</h6></div>
                <div className='col-sm' align='rigt '><h6> {user.nombre+' '+user.apellido_pat+' '+user.apellido_mat}</h6></div>
               </div>                
               <div className="row">
                <div className='col-sm' align='left '><h6 >DEPARTAMENTO:</h6></div>
                <div className='col-sm' align='rigt '><h6> {user.puesto}</h6></div>
               </div>
               <div className="row">
                <div className='col-sm' align='left '><h6 >MATRICULA:</h6></div>
                <div className='col-sm' align='rigt '><h6> {user.matricula}</h6></div>
               </div>
              </div>
              <div align='left' className="col-12 col-md-8" style={{marginBottom: '30px'}}>
            {this.state.rol === 'ADMIN' &&
            <div className="row">
            
                <div className='col-sm' align='left' ><h6><strong>Cargar nuevo membrete de reporte: </strong>
                  <FaInfoCircle onClick={()=>this.setState({show: !this.state.show})}/>
                  </h6>
                  {this.state.show && <div className="alert alert-primary">El archivo debera tener formato png con nombre background</div>}
                  </div>
                <div className='col-sm' align='rigt '><input type="file" className="form-control" name="file"        
                  onChange={e => this.setFile(e)}
                /></div>
                <div className="row">
                <div className='col-sm' align='rigt '> <button
                  onClick={e=>this.submit(e)}
                  className="btn btn-primary btn-block">
                  Cargar
                </button></div>
                </div>
            </div>}
          </div>
          </div>
          }
        </div>
        </div>
        )
        
    }
}