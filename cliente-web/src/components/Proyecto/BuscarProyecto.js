import React, {Component} from 'react'
import { FaSearch } from "react-icons/fa";
import {busqueda} from './projecto'


class BuscarProyecto extends Component {

constructor(props){
super(props)
this.state={
    proyecto: null,
    tipoBusqueda: '1',
    busqueda:''
}
this.onChange = this.onChange.bind(this)
this.onSubmit = this.onSubmit.bind(this)
}




onChange(e) {
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



render(){
    return(
        <div class="container" >
          <div className="py-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">PROYECTOS</h1>
              <hr className="my-4"></hr>  
            </div>
            <form onSubmit={this.onSubmit} noValidate>
            <div className="input-group">
            <input type="text" class="form-control" placeholder="Buscar..." 
            name="busqueda" 
            value={this.state.busqueda}
            onChange={this.onChange}/>
            <div className="input-group-append">
              <button class="btn btn-secondary" type="submit" >
                <FaSearch />                
              </button>
            </div>
            </div>
            <div className="input-group " style={{marginTop: '20px'}} >
            <span><h5>Buscar segun:</h5></span>
            </div>
            <div className="input-group" >
            <ul style={{listStyleType: "none", textAlign:'left', fontSize:'17px'}}>              
            <li style={{marginTop: '10px'}}>
              <input 
              type="radio"
              name="tipoBusqueda"
              value="1"
              onChange={this.onChange}
              checked={this.state.tipoBusqueda === '1' }/>
              Titulo de Proyecto
            </li>
            <li style={{marginTop: '10px'}}>
              <input 
              type="radio"
              name="tipoBusqueda"
              value="2"
              onChange={this.onChange} 
              checked={this.state.tipoBusqueda === '2' }/>
              Numero de control
            </li>
            <li style={{marginTop: '10px'}}>
              <input 
              type="radio"
              name="tipoBusqueda"
              value="3"
              onChange={this.onChange} 
              checked={this.state.tipoBusqueda === '3' }/>
              Nombre de Estudiante
              </li>
            </ul>
            </div>
            </form>
            </div>
            <div>
              <div>
              {this.state.proyectos!==null ? "hola" : "noHola"}
              </div>
            </div>
        </div>
        )
    }
}

export default BuscarProyecto;