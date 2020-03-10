import React, {Component} from 'react'

import Modal from '../Seguimiento/Modal'
import ModalAgregar from '../Seguimiento/Agregar-modal'
import jwt_decode from 'jwt-decode'

class VerProyecto extends Component {

constructor(props){
    console.log(props);
super(props)
this.state={
    proyecto: null,
    tipo: '',
    rol: ''
}
//this.onChange = this.onChange.bind(this)
//this.onSubmit = this.onSubmit.bind(this)
}

componentDidMount(){
  const token = localStorage.usertoken
  const decoded = jwt_decode(token);  
  this.setState({
    rol: decoded.rol
  });
}

/*onChange(e) {
  this.setState({ [e.target.name]: e.target.value})
}
onSubmit(e) {
  e.preventDefault()
  const token = localStorage.usertoken
  const newSearch = {
      tipoBusqueda: this.state.tipoBusqueda,
      busqueda: this.state.busqueda
      
  }
  console.log(newSearch)
  busqueda(newSearch, token,e).then(res => {
    console.log(res)
  })
}
*/
changeMod(e, tipo){
    this.setState({tipo: tipo})
}
componentWillMount(){
    this.setState({
        proyecto: this.props.location.state
    })

}

render(){
    const{error,proyecto, status, rol}=this.state; 
    console.log(this.props.location);
    if(proyecto==null){
        return(<div>Sin datos</div>)
    }else{
    return(
        <div class="container" >
          <div className="py-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">PROYECTO</h1>
              <hr className="my-4"></hr>  
            </div>
            <div className="text-left" style={{margin:'10px'}}>
              <table className="table table-hover" >
              <thead>
                <td colSpan="5" className="table-primary"><h5 className="text-center">Informacion General</h5></td>
                </thead>
                <tbody>
                  <tr >
                    <th scope="row">Titulo</th>
                    <td colSpan='4'>{proyecto.nombre}</td> 
                     
                  </tr> 
                  
                  <tr  >
                    <th scope="row">Empresa</th>
                      <td colSpan='4'>{proyecto.empresa}</td>  
                  </tr>
                  <tr >
                    <th  scope="row">Ciclo</th>
                      <td colSpan='4'>{proyecto.ciclo}</td>  
                  </tr>
                  <tr  >
                    <th scope="row">Asesor Externo</th>
                      <td colSpan='4'>{proyecto.asesor_ext}</td>  
                  </tr>
                  <tr  >
    <th className="table-primary" colSpan="5" scope="row">Estatus {rol==='ADMIN' && <button className="badge btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={e=>this.changeMod(e, 'Asesor Interno')} >Modificar</button>}</th> 
                  </tr>   
                  <tr  >
                    <th scope="row">Asesor interno</th>
                      <td colSpan='3'>{proyecto.seguimiento ? proyecto.seguimiento.asesor_int : 'No definido' }</td> 
                      <td align='right'>
                        {(proyecto.seguimiento=== null && rol==='ADMIN' ) &&
                          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalAgregar" >Agregar</button>
                        }
                      </td>  
                  </tr>
                  <tr>
                    <th scope="row">Status</th>
                      <td colSpan='3'>{proyecto.seguimiento ? proyecto.seguimiento.status : 'No definido' }</td>
                      <td align='right'>
                      </td>  
                  </tr>
                  <tr  >
                    <th className="table-primary" colSpan="5" scope="row">Alumnos</th> 
                  </tr>
                  <tr className="table-secondary">
                    <th scope="col">Nombre</th>
                    <th scope="col">N.Control</th>
                    <th scope="col">Carrera</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Sexo</th>
                  </tr>
                  {proyecto.alumno ? proyecto.alumno.map(alumno => ( 
                  <tr key={alumno.id}>
                  <td>{alumno.nombre } {alumno.apellido_pat } {alumno.apellido_mat}</td>
                  <td>{alumno.nc}</td>
                  <td>{alumno.carrera_id === 1 ?'ING.INFORMATICA':[alumno.carrera_id===2 ? 'ING.GESTION EMPRESARIAL':[ alumno.carrera_id===3 ? 'ING.AGRONOMIA'  : 'ING.INDUSTRIAS ALIMENTARIAS' ]]}</td>
                  <td>{alumno.telefono}</td>
                  <td> {alumno.sexo}</td>
                  </tr>
                  )):''}
                   {proyecto.seguimiento ? 
                     <Modal data={proyecto.seguimiento}/>
                    :<ModalAgregar id={proyecto.id}/>}
                </tbody>
              </table>
              </div>
            </div>
        </div>
        )}
    }

}

export default VerProyecto;