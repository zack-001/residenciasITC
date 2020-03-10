import React, { Component } from 'react'
import {busqueda, getExpedientes, destroy} from './expediente'
import { FaSearch } from "react-icons/fa";
import { Link, withRouter } from 'react-router-dom'
import { getExpReq, getProyecto} from '../Proyecto/projecto'
import VerProyecto from '../Proyecto/VerProyecto'
import jwt_decode from 'jwt-decode';

export default class DefaultExpediente extends Component {
  
  constructor(props) {
    
    super(props)
    this.state = {
        expediente:'',
        rol:'',
        status:'',
        statusExp:'',
        proyecto:'',
        error:'',
        busqueda:''
    }
    this.onChange = this.onChange.bind(this)
}

componentWillMount(){    
  const token = localStorage.usertoken
  const decoded = jwt_decode(token)
  this.setState({rol: decoded.rol})
  getExpedientes( token, this);
}


onChange(e) {
  this.setState({ [e.target.name]: e.target.value})       
  }

  delete(id){
    const token = localStorage.usertoken;
    if(window.confirm('¿Esta seguro que desea eliminar este archivo? de su expediente?')){
      destroy(token,id).then(res => {
        if (res.data.status =='success'){
            console.log(res)
            window.location.reload();
        }else{
          console.log(res.data.message)
        }
      })
    } 
    
  }

  buscar() { 
    //e.preventDefault();
    const token = localStorage.usertoken
    const newSearch = {
        busqueda: this.state.busqueda
    }
    console.log(newSearch)
    busqueda(newSearch, token,this);
  }

  VerProyecto(e, user_id){
    getProyecto(this, user_id);
  }

  render(){
    const URL='http://localhost:8000/storage/files/'
    const{expediente, statusExp, proyecto, status, rol}=this.state;  
    //console.log(rol)
    if(status=='success'){
      this.props.history.push({
        pathname: '/proyecto/ver',
        state: this.state.proyecto // your data array of objects
      })
    }else{console.log('it is not working!')}
    console.log(expediente)
      return(
        <div className="container-fluid">
        <div className="py-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Expediente</h1>
            <hr className="my-4"></hr>  
          </div>
            <div className="input-group">
            <input type="text" class="form-control" placeholder="Buscar...  Segun titulo/descripcion/alumno/fecha(AAAA-MM-D)" 
            name="busqueda" 
            value={this.state.busqueda}
            onChange={this.onChange}/>
            <div className="input-group-append">
              <button class="btn btn-secondary" onClick={(e) => this.buscar(e)} >
                <FaSearch />                
              </button>
            </div>
            </div >
            {statusExp && statusExp==='error' ? expediente :
              expediente && expediente.map(data => (
            <div  key={data.id} style={{margin: '20px'}} align='left'>
              <div className='row' style={{marginTop: '40px'}}>
                <div >
                <img style={{height:'150px', width:'150px'}}
                  src={URL+data.doc_dir}
                />
                </div>
                <div style={{marginLeft:'20px'}}>
                  <div><strong>Titulo:</strong> {data.nombre}</div>
                  <div><strong>descripcion: </strong> {data.descripcion}</div>
                  <div><strong>ultima modificacion: </strong> {data.updated_at}</div>
                  <div><strong>creado por: </strong><button className='btn btn-link' onClick={(e) => this.VerProyecto(e, data.user_id)} >
                          {data.user ? data.user.email: data.email}        
                        </button>
                  </div>               
                  <div><a  className="btn btn-primary" href={URL+data.doc_dir} target="_blank" role="button">Ver</a>
                  {rol ==='ALUMNO' &&<Link  style={{marginLeft:'10px'}} className='btn btn-warning' to={{pathname:'/expediente/actualizar', state:data}}> Actualizar</Link>}
                  {rol ==='ALUMNO' &&<button style={{marginLeft:'10px'}} className='btn btn-danger' onClick={(e) => this.delete(data.id)}>Eliminar</button>}
                  </div>
                </div>        
              </div>
              <hr className="my-4"></hr>
            </div>
            
            ))}
            
              
          <div>
        </div>  
      </div>
    </div>
    )}

}
