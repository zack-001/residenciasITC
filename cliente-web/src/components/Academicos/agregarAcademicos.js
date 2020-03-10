import React, { Component } from 'react'
import {register} from './academicos'
import jwt_decode from 'jwt-decode'

class AgregarAlumnos extends Component {
  
  constructor() {
  super()
    this.state = {
        nombre: '',
        apellido_pat: '',
        apellido_mat: '',
        matricula: '',
        puesto: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const token = localStorage.usertoken
    //const file = new FormData()
    //file.append('file', this.proyecto_dir.current.files[0].name)
    const newData = {
      nombre: this.state.nombre,
      apellido_pat: this.state.apellido_pat,
      apellido_mat: this.state.apellido_mat,
      puesto: this.state.puesto,
      matricula: this.state.matricula,
      
    }
    console.log(newData)
    register(newData, token).then(res => {
      if (res){
              this.props.history.push(`/academicos`)
      }
    })
    
  }
  
  render() {

      const mystyle = {
        margin: "10px",
      };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">REGISTRE SUS DATOS!</h1>
              
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ingrese su nombre(s)"
                  value={this.state.nombre}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="apellido_pat">Apellido Paterno</label>
                <input
                  type="text"
                  className="form-control"
                  name="apellido_pat"
                  placeholder="Ingrese el apellido paterno"
                  value={this.state.apellido_pat}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellido_mat">Apellido Materno</label>
                <input
                  type="text"
                  className="form-control"
                  name="apellido_mat"
                  placeholder="Ingrese el apellido materno"
                  value={this.state.apellido_mat}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellido_mat">Departamento</label>
                <input
                  type="text"
                  className="form-control"
                  name="puesto"
                  placeholder="Ingrese el Departamento"
                  value={this.state.puesto}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="matricula">Matricula</label>
                <input
                  type="text"
                  className="form-control"
                  name="matricula"
                  placeholder="Ingrese el numero de control"
                  value={this.state.matricula}
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

export default AgregarAlumnos