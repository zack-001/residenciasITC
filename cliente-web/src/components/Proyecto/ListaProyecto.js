import React from 'react'
import jwt_decode from 'jwt-decode'
import {getProyectos, busqueda} from './projecto'
import {register, update} from '../Seguimiento/seguimiento'
import { Link, withRouter } from 'react-router-dom'
import Modal from '../Seguimiento/Modal'
import ModalAgregar from '../Seguimiento/Agregar-modal'
import { FaSearch } from "react-icons/fa";

export default class  ListaProyecto extends React.Component{

    constructor(props){
        super(props)
        this.state= {
          proyecto:'',
          alumnos: '',
          seguimiento: '',
          status: '',
          error:'',
          s_asesor_int:'',
          s_status:'',
          tipoBusqueda:'',
          busqueda:''
        }

        this.onChange = this.onChange.bind(this)
        //this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
      const token = localStorage.usertoken
      const decoded = jwt_decode(token);  
      console.log(decoded);
      const newStatus = {tipoBusqueda: this.state.tipoBusqueda, busqueda: this.state.busqueda}
      busqueda(newStatus,token, this);
    }
    /*componentDidUpdate(prevProps) {
      console.log(prevProps);
      if(prevProps.proyecto){
      if (this.props.proyecto.id !== prevProps.proyecto.id) {
        this.fetchData(this.props.proyecto.id);
        console.log(this.props)
      }
    }
    }*/

    handleSave() {
      const token = localStorage.usertoken
      const newStatus = {
          asesor_int: this.state.asesor_int,
          status: this.state.status,
      }
      console.log(newStatus)
      update(newStatus, token, this.state.id).then(res => {
          console.log(res)
          if (res.status==='success'){
              window.location.reload();
      }
      })
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  buscar() {
    
    //e.preventDefault();
    const token = localStorage.usertoken
    const newSearch = {
        tipoBusqueda: this.state.tipoBusqueda,
        busqueda: this.state.busqueda
    }
    console.log(newSearch)
    busqueda(newSearch, token,this);
  }


    replaceModalItem(index) {
      this.setState({
        requiredItem: index
      });
    }
    
  render() {
    
    var c=0;
    const{error, proyecto, status, alumnos}=this.state;  
    console.log(proyecto)
    if(proyecto==null){  
      return(  
          <div>Sin resultados</div>  
      )  
    } else{
    return (
     
      <div className="container-fluid">
        <div className="py-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROYECTOS</h1>
            <hr className="my-4"></hr>  
          </div>
            <div className="input-group">
            <input type="text" class="form-control" placeholder="Buscar..." 
            name="busqueda" 
            value={this.state.busqueda}
            onChange={this.onChange}/>
            <div className="input-group-append">
              <button class="btn btn-secondary" onClick={(e) => this.buscar(e)} >
                <FaSearch />                
              </button>
            </div>
            </div>
            <div className="input-group " style={{marginTop: '20px'}} >
            <span style={{marginRight: '10px'}}><h6>Filtrar segun:</h6></span>
            <select name="tipoBusqueda" value={this.state.tipoBusqueda} onChange={this.onChange}  >
              <option selected value="0">Ninguno</option>
              <option value="1">Titulo del proyecto</option>
              <option value="2">Numero de Control</option>
              <option value="3">Nombre</option>
             </select>        
            </div>
          <div>
          <table className="table table-hover" style={{marginTop: '30px'}}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Alumno(s)</th>
                    <th scope="col">Ciclo</th>
                    <th scope="col">Asesor</th>
                    <th scope="col">Estatus</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                
                {proyecto  ? proyecto.map(proy => ( 
                <tbody key={proy.id}>
                  <th scope="row">{c=c+1}</th>
                  <td>{proy.nombre}</td>
                  <td>
                    {proy.alumno ? proy.alumno.map(alumno=>(
                    <ul   style={{listStyleType: "none"}} key={alumno.id}>
                      {alumno.nombre} {alumno.apellido_pat} {alumno.apellido_mat}
                    </ul>
                    )):'Sin datos'}
                  </td>
                  <td>{proy.ciclo}</td>
                  <td>
                     {proy.seguimiento!==null ? proy.seguimiento.asesor_int : 
                     /*<Link className="btn btn-success"  to={{pathname: "#", data: proy.id}}>Agregar</Link>}*/
                     <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalAgregar" >Agregar</button>}
                  </td>
                  <td> {proy.seguimiento ? [proy.seguimiento.status ? proy.seguimiento.status
                  :'No definido']:""}</td>
                  <td> 
                    {<Link className="btn btn-primary"  to={{pathname: "/proyecto/ver", state: proy}}>Ver</Link>}
                    {/*proy.seguimiento ? 
                      <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                      onClick={() => this.setState({seguimiento: proy.seguimiento})}
                       >edit</button>
                     /*<Link className="btn btn-warning"  to={{pathname: "#", data: proy.id}}>Modificar</Link>
                    :""*/}
                    {proy.seguimiento !== null? 
                     /*<Modal data={this.state.seguimiento}/>*/""
                    :<ModalAgregar id={proy.id}/>}
                  </td>
                </tbody>
                
                  )): ''}
              </table>
              {console.log('something'+this.state.seguimiento)}
              
          </div>
          
      </div>
    </div>
    )}
  }
}