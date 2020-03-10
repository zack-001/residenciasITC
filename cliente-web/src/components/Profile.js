import React, { Component, button } from 'react'
import jwt_decode from 'jwt-decode'
import {getProyecto, destroy} from './Proyecto/projecto'
import {destroyAlumno} from './Alumnos/alumno'
import ModalVer from './ModalVer'
import VerAlumno from './Alumnos/VerAlumno'
import { Link, withRouter } from 'react-router-dom'

class Profile extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      show: '',
      email: '',
      errors: {},
      id: '',
      proyecto: [],
      status:[]
    }
    
  }
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);  
    console.log(decoded);
    getProyecto(this, decoded.sub);
    //const data_proy = getProyecto(decoded.sub);
    this.setState({
      email: decoded.email, 
      id: decoded.sub
    });
  }

  deleteProy(){
    const token = localStorage.usertoken;
    if(window.confirm('¿Esta seguro que desea eliminar su proyecto? Recuerde que se perderan los datos relacionados')){
      destroy(token, this.state.proyecto.id).then(res => {
        if (res){
                this.props.history.push(`/profile`);
                window.location.reload();
        }
      })
    } else{
      this.props.history.push(`/profile`);
    }
    
  }
  deleteAlumno(id){
    console.log(id)
    const token = localStorage.usertoken;
    if(window.confirm('¿Esta seguro que dar de baja a este alumno del proyecto? Recuerde que se perderan los datos relacionados')){
      destroyAlumno(token, id).then(res => {
        if (res){
                this.props.history.push(`/profile`);
                window.location.reload();
        }
      })
    } else{
      this.props.history.push(`/profile`);
    }
    
  }


  render() {
    let listaAlumnos="sin datos";
    const{error,proyecto, status}=this.state; 
    if(proyecto && proyecto.alumno) {
      console.log(Object.keys(proyecto.alumno).length)
      
    }else{
      console.log('vacio')
  }
    if(error){  
      return(  
          <div>Error:{error.message}</div>  
      )  
  } else{
    
      
    return (
     
      <div className="container-fluid">
        <div className="py-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Perfil</h1>
            <hr className="my-4"></hr>  
          </div>
          {console.log(listaAlumnos)}
          <div >
            <div className="row">
             <h4 className="col-sm d-flex justify-content-between align-items-center mb-3"><span className="text-muted">USUARIO:</span></h4>
            </div>
              <div align='left' className="col-12 col-md-8" style={{marginBottom: '30px'}} >  
              <div className="row">
                <div className='col-sm' align='left '><h6 >EMAIL:</h6></div>
                <div className='col-sm' align='rigt '><h6> {this.state.email}</h6></div>
              </div>                
              </div>
               

  <h4 className="d-flex justify-content-between mb-3"><span className="text-muted">PROYECTO: {status!=='success' ? <Link className="badge badge-success" to="/proyecto/agregar">Agregar</Link>:""}</span></h4>
            <div className='row'>
            <div className="col-12 col-md-8"  > 
 
              <div align='left' className="row"  style={{marginBottom: '15px'}}>
                <div className='col-sm'><h6 >TITULO:</h6></div>
                <div className='col-sm'><h6> {status === 'success' ? proyecto.nombre : ''}</h6></div>
            
              </div>
            </div>
            <div className="col-6 col-md-4" >
                <button id="1" style={{marginRight: '3px'}} className="btn btn-primary" data-toggle="modal" data-target="#myModal" >Ver</button>
                {/*status=='success' ? <button className="btn  btn-success" disabled>Agregar</button> : <a href='/proyecto/agregar' className="btn  btn-success"  >Agregar</a>*/}
                <a  style={{marginRight: '3px'}} className="btn btn-warning" href="/proyecto/modificar" role="button">Actualizar</a>
                {status=='error' ? <button  style={{marginRight: '3px'}} className="btn  btn-danger" disabled>  Borrar  </button> : <button  style={{marginRight: '3px'}} href='/proyecto/agregar' className="btn  btn-danger"  onClick={(e) => this.deleteProy(e)} >Borrar</button>}
            </div>
            </div>
            <div className='row'  style={{marginBottom: '15px'}}>
            <div className="col-12 col-md-8">
            <div align='left' className="row">
                <div className='col-sm'><h6 >ESTATUS:</h6></div>
                <div className='col-sm'><h6> No definido</h6></div>  
              </div>
            </div></div>

            <div className='row'>
            <div className='col-sm'><h4 className="d-flex justify-content-between mb-3"><span className="text-muted">ALUMNOS:{proyecto && proyecto.alumno ? [ Object.keys(proyecto.alumno).length < proyecto.num_residentes && <Link className="badge badge-success" to="/alumno/agregar">Agregar</Link> ]: <Link className="badge badge-success" to="/alumno/agregar">Agregar</Link> }</span></h4></div>
            <div align='right' style={{marginRight:'75px'}} > <button id="2" style={{marginRight: '3px'}} className="btn btn-primary" data-toggle="modal" data-target="#modalAlumno"  >Ver</button>{/*<Link className="btn btn-primary"  to={{pathname: "/alumno", data: proyecto.alumno}}>Ver</Link>*/}</div>
            </div>
            {status === 'success' ?[proyecto.alumno ? <VerAlumno data={proyecto.alumno} />: <VerAlumno data={'sin datos'} />]:<VerAlumno data={'sin datos'} />}
            {proyecto && proyecto.alumno  ? proyecto.alumno.map(alumno => ( 
            <div key={alumno.id} className='row'>
            <div className="col-12 col-md-8"  > 
 
              <div align='left' className="row"  style={{marginBottom: '15px'}}>
                <div className='col-sm'><h6 >NOMBRE:</h6></div>
                <div className='col-sm'><h6> {alumno.nombre } { alumno.apellido_pat } { alumno.apellido_mat}</h6></div>           
              </div>
            </div>
            <div className="col-6 col-md-4" >
                <button id="2" style={{marginRight: '3px'}} className="btn btn-primary" data-toggle="modal" data-target="#modalAlumno"  >Ver</button>
                {/*status=='success' ? <button className="btn  btn-success" disabled>Agregar</button> : <a href='/proyecto/agregar' className="btn  btn-success"  >Agregar</a>*/}
                <Link  style={{marginRight: '3px'}} className="btn btn-warning" to={{pathname: "/alumno/modificar", data: alumno}}>Actualizar</Link>
                {status=='error' ? <button  style={{marginRight: '3px'}} className="btn  btn-danger" disabled>  Borrar  </button> : <button  style={{marginRight: '3px'}}  className="btn  btn-danger"  onClick={(e) => this.deleteAlumno(alumno.id)} >Borrar</button>}
                      
            </div>           
            </div>
            
            )): ''}
          
          <ModalVer>
            <div>
              <table className="table table-hover">
                <tbody>
                  <tr className="table-primary">
                    <th scope="row">Titulo</th>
                      <td>{status==='success' ? proyecto.nombre : ''}</td>  
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row">Empresa</th>
                      <td>{status==='success' ? proyecto.empresa : ''}</td>  
                  </tr>
                  <tr className="table-primary">
                    <th  scope="row">Ciclo</th>
                      <td>{status==='success' ? proyecto.ciclo : ''}</td>  
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row">Asesor Externo</th>
                      <td>{status==='success' ? proyecto.asesor_ext : ''}</td>  
                  </tr>
                </tbody>
              </table>
            </div>
        </ModalVer> 
        </div>
      </div>
    </div>
  )
  }
  }
}


export default Profile

