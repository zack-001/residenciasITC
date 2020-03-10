import React, { Component } from 'react'
import {update, getAlumnos} from './alumno'
import {getToken} from '../User'
import jwt_decode from 'jwt-decode'

class ActualizarAlumno extends Component {
  
  constructor(props) { 
    super(props)

    this.state = {
        id: '',
        nombre: '.',
        apellido_pat: '.',
        apellido_mat: '.',
        nc: '.',
        telefono: '.',
        sexo: '.',
        carrera_id: '.',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  
componentWillMount(){
    const { data } = this.props.location;
    this.setState({
        id: data.id,
        nombre: data.nombre,
        apellido_pat: data.apellido_pat,
        apellido_mat: data.apellido_mat,
        nc: data.nc,
        telefono: data.telefono,
        sexo: data.sexo,
        carrera_id: data.carrera_id,
    });

}


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  onSubmit(e) {
    const { data } = this.props.location;
    e.preventDefault()
    const token = localStorage.usertoken
    const newStudent = {
        nombre: this.state.nombre != '.' ? this.state.nombre : data.nombre,
        apellido_pat: this.state.apellido_pat != '.' ? this.state.apellido_pat : data.apellido_pat,
        apellido_mat: this.state.apellido_mat != '.' ? this.state.apellido_mat : data.apellido_mat,
        nc: this.state.nc != '.' ? this.state.nc : data.nc,
        telefono: this.state.telefono != '.' ? this.state.telefono : data.telefono,
        sexo: this.state.sexo != '.' ? this.state.sexo : data.sexo,
        carrera_id: this.state.carrera_id != '.' ? this.state.carrera_id : data.carrera_id,
    }
    console.log(newStudent)
    update(newStudent, token, this.state.id).then(res => {
      if (res){
              this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    
    const mystyle = {
        margin: "10px",
    };
    return (<div className="container">
    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
        <form noValidate onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">ACTUALIZAR DATOS SUS DATOS!</h1>
          
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


export default ActualizarAlumno