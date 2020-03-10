import React, { Component } from 'react'
import {register} from './alumno'
import jwt_decode from 'jwt-decode'

class AgregarAlumnos extends Component {
  
  constructor() {
  super()
    this.state = {
        nombre: '',
        apellido_pat: '',
        apellido_mat: '',
        nc: '',
        telefono: '',
        sexo: '',
        carrera_id: '1'
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
/*
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      email: decoded.email
    })
  }
*/

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const token = localStorage.usertoken;
    const newStudent = {
        nombre: this.state.nombre,
        apellido_pat: this.state.apellido_pat,
        apellido_mat: this.state.apellido_mat,
        nc: this.state.nc,
        telefono: this.state.telefono,
        sexo: this.state.sexo,
        carrera_id: this.state.carrera_id
    }
    console.log(newStudent)
    
    register(newStudent, token).then(res => {
      console.log(res);
      this.props.history.push(`/profile`)
    })
    //ADD A MODAL TO THE BUTTON
    //window.confirm('Desea registrar otro residente?') ? this.onConfirm() : this.onCancel()
  }
  onConfirm(){
    console.log('Agregar')
  }
  onCancel(){
    console.log('Terminar')
    
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
                <label>
                  Selecciona tu carrera:  
                  <select  name="carrera_id" value={this.state.carrera_id} onChange={this.onChange} style={mystyle}>
                    <option class="small" value="1">ING. INFORMATICA</option>
                    <option class="small" value="2">ING. GESTION EMPRESARIAL</option>
                    <option class="small" value="3">ING. AGRONOMIA</option>
                    <option class="small" value="4">ING. INDUSTRIAS ALIMENTARIAS</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="nc">Numero de Control</label>
                <input
                  type="text"
                  className="form-control"
                  name="nc"
                  placeholder="Ingrese el numero de control"
                  value={this.state.nc}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  name="telefono"
                  placeholder="Ingrese el telefono"
                  value={this.state.telefono}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>
                  Sexo:  
                  <select name="sexo" value={this.state.sexo} onChange={this.onChange} style={mystyle}>
                    <option value="1">Selecciona el sexo</option>
                    <option value="M">Hombre</option>
                    <option value="F">Mujer</option>
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

export default AgregarAlumnos