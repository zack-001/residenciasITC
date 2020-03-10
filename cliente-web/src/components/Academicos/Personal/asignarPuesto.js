import React, { Component } from 'react'
//import {register} from './alumno'
//import jwt_decode from 'jwt-decode'

class asignarPuesto extends Component {
  
  constructor() {
  super()
    this.state = {
        nombre: '',
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
                <label htmlFor="nombre">Nombre del Personal</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ingrese el nombre"
                  value={this.state.nombre}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="puesto">Puesto</label>
                <input
                  type="text"
                  className="form-control"
                  name="puesto"
                  placeholder="Ingrese el puesto ocupado"
                  value={this.state.apellido_pat}
                  onChange={this.onChange}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Guardar!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default asignarPuesto