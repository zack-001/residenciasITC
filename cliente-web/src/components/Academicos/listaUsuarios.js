import React from 'react'
import {listAcademicos, destroy} from './academicos'
import jwt_decode from 'jwt-decode'

export default class listaUsuarios extends React.Component{
    constructor(props){
    super(props)
        this.state = {
          show: '',
          usuarios: [],
          status:[]
        }
    }
    
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);  
    console.log(decoded);
    listAcademicos(this);
  }
  delete(id){
    const token = localStorage.usertoken;
    if(window.confirm('¿Esta seguro que desea eliminar a este usuario? Recuerde que se perderan los datos relacionados')){
      destroy(token, id).then(res => {
        if (res){
                window.location.reload();
        }
      })
    } else{
      this.props.history.push(`/academicos`);
    }
  }
    render(){
        const{usuarios, status}=this.state; 
            console.log(usuarios)
        return(
        <div className="container-fluid">
        <div className="py-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Personal</h1>
            <hr className="my-4"></hr> 
            </div>
            <div>
            <table className="table table-hover" style={{marginTop: '30px'}}>
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Email</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Fecha Alta</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                {usuarios ? usuarios.map(user => ( 
                <tbody key={user.id}>
                  <td>{user.academico ? user.academico.nombre +' '+ user.academico.apellido_pat+' '+ user.academico.apellido_mat : 'sin registros'}</td>
                  <td>{user.academico ? user.academico.puesto : 'sin registros'}</td>
                
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td>{user.created_at}</td>
                <td><button  style={{marginRight: '3px'}} className="btn  btn-danger"  onClick={(e) => this.delete(user.id)} >Borrar</button></td>
                </tbody>
                )): 'sin usuarios especiales registrados'}
              </table>
            </div>
        </div>
        </div>
        )
        
    }
}