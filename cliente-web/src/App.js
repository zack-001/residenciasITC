import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logoHeader from './assets/img/tecnm-logo.png'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import ListarProyecto from './components/Proyecto/ListaProyecto'
import BuscarProyecto from './components/Proyecto/BuscarProyecto'
import AgregarProyecto from './components/Proyecto/AgregarProyecto'
import ActualizarProjecto from './components/Proyecto/ActualizarProjecto'
import VerProyecto from './components/Proyecto/VerProyecto'


import AgregarAlumno from './components/Alumnos/AgregarAlumnos'
import ActualizarAlumno from './components/Alumnos/ActualizarAlumno'

import AgregarExpediente from './components/Expediente/AgregarExpediente'
import ActualizarExpediente from './components/Expediente/ActualizarExpediente'
import DefaultExpediente from './components/Expediente/DefaultExpediente'

import registerAdmin from './components/Academicos/register'
import AgregarSeguimiento from "./components/Seguimiento/Agregar-modal"
import AgregarAcademicos from "./components/Academicos/agregarAcademicos"
import LandingAcademicos from "./components/Academicos/index"
import asignarPuesto from "./components/Academicos/Personal/asignarPuesto"
import landingPuesto from "./components/Academicos/Personal/landingPuesto"
import listaUsuarios from "./components/Academicos/listaUsuarios"

import PruebaPDF from "./components/Reportes/PruebaPDF.jsx"
import index from "./components/Reportes/index.js"
import ejemplo from "./components/Reportes/ejemplo"
import MainEtapa1 from "./components/Reportes/Etapa1/MainEtapa1"
import MainEtapa2 from "./components/Reportes/Etapa2/MainEtapa2"
import MainEtapa3 from "./components/Reportes/Etapa3/MainEtapa3"




function App() {
  return (
    <Router>
        <div className="App">
        <div><img src={logoHeader} className="d-inline-block align-top" alt=""></img></div>        
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/register/user-academico" component={registerAdmin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />

            <Route exact path="/proyecto" component={ListarProyecto} />
            <Route exact path="/proyecto/agregar" component={AgregarProyecto} />
            <Route exact path="/proyecto/modificar" component={ActualizarProjecto} />
            <Route exact path="/proyecto/ver" component={VerProyecto} />

            <Route exact path="/alumno/agregar" component={AgregarAlumno} />
            <Route exact path="/alumno/modificar" component={ActualizarAlumno} />
            
            <Route exact path="/expediente" component={DefaultExpediente} />
            <Route exact path="/expediente/Agregar" component={AgregarExpediente} />
            <Route exact path="/expediente/actualizar" component={ActualizarExpediente} />

            <Route exact path="/proyecto" component={AgregarSeguimiento} />

            <Route exact path="/reporte/prueba" component={index} />
            <Route exact path="/reporte/123" component={PruebaPDF} />
            <Route exact path="/reporte/ejemplo" component={ejemplo} />
            <Route exact path="/reporte/etapa-1" component={MainEtapa1} />
            <Route exact path="/reporte/etapa-2" component={MainEtapa2} />
            <Route exact path="/reporte/etapa-3" component={MainEtapa3} />

            <Route exact path="/academicos/registro" component={AgregarAcademicos} />
            <Route exact path="/academicos" component={LandingAcademicos} />
            
            <Route exact path="/puesto/registro" component={asignarPuesto} />
            <Route exact path="/puesto" component={landingPuesto} />
            
            <Route exact path="/usuarios" component={listaUsuarios} />
            
          </div>
        </div>
      </Router>
      
      
  );
}

export default App;

