import React, { Component } from 'react'
import {register} from './projecto'
import {getToken} from '../User'
import jwt_decode from 'jwt-decode'

class AgregarProyecto extends Component {
  
  constructor() {
    
    super()
    this.state = {
      empresa: '',
      ciclo: '',
      asesor_ext: '',
      nombre: '',
      proyecto_dir: null,
      num_residentes: 1,
    }
    //this.proyecto_dir = React.createRef();
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  /*componentDidMount() {
    //const token = localStorage.usertoken
    //const decoded = jwt_decode(token)
    this.setState({
      email: decoded.email
    })
  }*/


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault()
    const token = localStorage.usertoken
    //const file = new FormData()
    //file.append('file', this.proyecto_dir.current.files[0].name)
    const newProject = {
      empresa: this.state.empresa,
      ciclo: this.state.ciclo,
      asesor_ext: this.state.asesor_ext,
      nombre: this.state.nombre,
      proyecto_dir: this.state.proyecto_dir,
      num_residentes: this.state.num_residentes
    }
    console.log(newProject)
    register(newProject, token).then(res => {
      if (res){
              this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">REGISTRA TU PROYECTO!</h1>
              
              <div className="form-group">
                <label htmlFor="nombre">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ingrese el titulo de su projecto"
                  value={this.state.nombre}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="ciclo">Ciclo</label>
                <input
                  type="text"
                  className="form-control"
                  name="ciclo"
                  placeholder="ej. AGO-ENE/2019"
                  value={this.state.ciclo}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="empresa">Empresa</label>
                <input
                  type="text"
                  className="form-control"
                  name="empresa"
                  placeholder="Empresa donde realiza su residencia"
                  value={this.state.empresa}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="asesor_ext">Asesor Externo</label>
                <input
                  type="text"
                  className="form-control"
                  name="asesor_ext"
                  placeholder="Asesor Externo"
                  value={this.state.asesor_ext}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>
                  Seleccione el numero de integrantes del proyecto:  
                  <select  name="num_residentes" value={this.state.num_residentes} onChange={this.onChange}>
                    <option class="small" value="1">1</option>
                    <option class="small" value="2">2</option>
                    <option class="small" value="3">3</option>
                    <option class="small" value="4">4</option>
                    <option class="small" value="4">5</option>
                  </select>
                </label>
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Registrar!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AgregarProyecto