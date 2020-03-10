import React from 'react'
import {getPersonal, getAcademico, update} from '../academicos'
import jwt_decode from 'jwt-decode'
import Landing from '../../Landing'
import ModalActualizacion from './ModalActualizacion'

export default class landingPuesto extends React.Component{
    constructor(props){
    super(props)
        this.state = {
          show: '',
          personal: [],
          status:[],
          user: '',
          rol: ''
        }
    }
    
  componentDidMount() {
    getPersonal(this);
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);  
    getAcademico(this, decoded.sub)
    this.setState({rol: decoded.rol})
  }
    render(){
        const{personal, status, user, rol}=this.state; 
        console.log(rol)
        return(
        <div className="container-fluid">
        <div className="py-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Personal</h1>
            <hr className="my-4"></hr> 
          </div>
          <div class="alert alert-primary alert-dismissible fade show" role="alert">
              <strong>Hola!</strong> En esta seccion encuentran el personal involucrado durante el proceso de residencias y titulación.
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div><table className="table table-hover" style={{marginTop: '30px'}}>
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Puesto</th>
                    <th scope="col">Ultima modificacion</th>
                    <th scope="col">Modificado por</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                {personal ? personal.map(data => ( 
                <tbody key={data.id}>
                  <tr>
                  <td>{data.nombre}</td>
                  <td>{data.puesto}</td>
                  <td>{data.updated_at}</td>
                  <td>{data.academico ? data.academico.nombre+' '+data.academico.apellido_pat+' '+data.academico.apellido_mat : 'Sin registro'}</td>
                <td>{rol==='ADMIN' && <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Modificar</button>}</td>
                  </tr>
                  <ModalActualizacion data={data} user={user.id}/>
                </tbody>
                )): 'sin usuarios especiales registrados'}
              </table>
              
              </div>
        </div>
        </div>
        )
        
    }
}