import React, { Component } from 'react'
import { registeradmin } from '../User'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      rol:'ACADEMICO'
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
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      rol: this.state.rol
    }

    registeradmin(newUser, token).then(res => {
      this.props.history.push(`/usuarios`)    
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
              <h1 className="h3 mb-3 font-weight-normal">Registro de usuarios con roles especiales</h1>
              <div className="form-group">
                <label htmlFor="email">Ingresar Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Ingresar email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="rol">Ingresar rol</label>
                <select name="rol" value={this.state.rol} onChange={this.onChange} style={mystyle}>
                    <option >Selecciona el rol</option>
                    <option value="ACADEMICO">Personal Academico</option>
                    <option value="ADMIN">Administrador</option>
                  </select>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
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

export default Register