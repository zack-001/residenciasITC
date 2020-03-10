import React, { Component } from 'react'
import {update, getProyecto} from './projecto'
import {getToken} from '../User'
import jwt_decode from 'jwt-decode'

class ActualizarProjecto extends Component {
  
  constructor() {
    
    super()
    this.state = {
      empresa: '.',
      ciclo: '.',
      asesor_ext: '.',
      nombre: '.',
      proyecto: [],
      status:[]
    }
    //this.proyecto_dir = React.createRef();
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);  
    console.log(decoded);
    getProyecto(this, decoded.sub);
  }



  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault()
    const token = localStorage.usertoken
    //const file = new FormData()
    //file.append('file', this.proyecto_dir.current.files[0].name)
    const newProject = {
      empresa: this.state.empresa != '.' ? this.state.empresa : this.state.proyecto.empresa,
      ciclo: this.state.ciclo != '.' ? this.state.ciclo : this.state.proyecto.ciclo,
      asesor_ext: this.state.asesor_ext != '.' ? this.state.asesor_ext : this.state.proyecto.asesor_ext,
      nombre: this.state.nombre != '.' ? this.state.nombre : this.state.proyecto.nombre,
      proyecto_dir: this.state.proyecto_dir != '.' ? this.state.proyecto_dir : this.state.proyecto.proyecto_dir
    }
    console.log(newProject)
    update(newProject, token, this.state.proyecto.id).then(res => {
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
                <h1 className="h3 mb-3 font-weight-normal">ACTUALIZAR</h1>
                
                <hr></hr>
                <div className="alert alert-warning">
                  <strong>Atención!</strong> Cualquier modificacion sobre sus datos deberá ser autorizado por <strong>Division de Estudios Profesionales</strong>
                </div>
                <div className="form-group">
                  <label htmlFor="nombre">Titulo</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Ingrese el titulo de su projecto"
                    value={ this.state.nombre != '.' ? this.state.nombre : this.state.proyecto.nombre}
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
                    value={ this.state.ciclo != '.' ? this.state.ciclo : this.state.proyecto.ciclo }
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
                    value={ this.state.empresa != '.' ? this.state.empresa : this.state.proyecto.empresa}
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
                    value={ this.state.asesor_ext != '.' ? this.state.asesor_ext : this.state.proyecto.asesor_ext}
                    onChange={this.onChange}
                  />
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


export default ActualizarProjecto