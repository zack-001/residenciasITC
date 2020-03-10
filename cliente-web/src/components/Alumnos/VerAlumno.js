import React from "react";
import PropTypes from "prop-types";

export default class VerAlumno extends React.Component {
  /*onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };*/
  render() {
    
var c=0;
    return (
<div className="modal fade" id="modalAlumno" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Ver</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
     
        <div  className='row'>
          <div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">N.Control</th>
                    <th scope="col">Carrera</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Sexo</th>
                  </tr>
                </thead>
                
                {this.props.data!=='sin datos'  ? this.props.data.map(alumno => ( 
                <tbody key={alumno.id}>
                  <th scope="row">{c=c+1}</th>
                  <td>{alumno.nombre } {alumno.apellido_pat } {alumno.apellido_mat}</td>
                  <td>{alumno.nc}</td>
                  <td>{alumno.carrera_id === 1 ?'ING.INFORMATICA':[alumno.carrera_id===2 ? 'ING.GESTION EMPRESARIAL':[ alumno.carrera_id===3 ? 'ING.AGRONOMIA'  : 'ING.INDUSTRIAS ALIMENTARIAS' ]]}</td>
                  <td> {alumno.telefono}</td>
                  <td> {alumno.sexo}</td>
                </tbody>
                )): ''}
              </table>        
            </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
    </div>
    </div>
    </div>
 )}}