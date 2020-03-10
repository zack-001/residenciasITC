import React, { Component } from 'react'
import Login from './Login';
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="jumbotron">
          <h1 className="display-4">BIENVENIDOS!</h1>
          <p className="lead">En esta plataforma podrán realizar el registro de sus anteproyectos de residencia, y demas datos necesarios, para facilitarles el seguimiento de sus proyecto</p>
          <hr className="my-4" />
          <p>Obtenga mas información pulsando el boton de descargar la Guia de Residencias Profesionales .</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="https://drive.google.com/file/d/1UH3jYA9iUniWRR3qitaLg-lUTHAa6fFf/view?usp=sharing" target="_blank"role="button">Guía de Residencias Profesionales</a>
          </p>
        </div>
          {/*<div className="col-sm-8 mx-auto" style={{padding:"25px"}}>
            <h2 className="text-center" style={{color: "#228800"}}>INSTITUTO TECNOLOOGICO DE COMITANCILLO</h2>
          </div>
          <div className="col-sm-8 mx-auto">
            <h5  className="h3 mb-3 font-weight-normal" style={{color: "#1f1f14"}}>
              Departamento de Ciencias Economico Administrativas</h5>
          </div>
            <div className="col-sm-8 mx-auto" >
           
    </div>*/}

        </div>
      </div>  
    )
    
    
  }
}

export default Landing