import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { Decipher } from 'crypto'

class Landing extends Component {

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  isAdmin() {
    const decoded= jwt_decode(localStorage.usertoken);
   console.log(decoded);
    if(decoded.rol === 'ADMIN'){
      return true
    }else{ return false}
  } 

    

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Registrar
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Perfil
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/Expediente" role="button" aria-haspopup="true" aria-expanded="false">Expediente</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/expediente/Agregar">Subir archivo</a>
            <a className="dropdown-item" href="/expediente">Buscar</a>
          </div>
       </li>
        <li className="nav-item">
          <Link to="/reporte/prueba" className="nav-link">
            Descargas
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    const adminLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/academicos" className="nav-link">
            Perfil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Expediente" className="nav-link">
            Expediente
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/proyecto" className="nav-link">
            Proyecto
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/personal" role="button" aria-haspopup="true" aria-expanded="false">Personal</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/register/user-academico">Alta usuario</a>
            <a className="dropdown-item" href="/usuarios">Usuarios</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/puesto">Asignacion de Puesto</a>
            
          </div>
       </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{fontSize: "18px", textIndent:'25px'}}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? [this.isAdmin() ? adminLink : userLink] : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
//  {localStorage.usertoken ? userLink : loginRegLink}