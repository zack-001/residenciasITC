import React,{  Component} from "react";
import {register} from './seguimiento'
import { withRouter } from 'react-router-dom';



class AgregarSeguimiento extends Component {

    constructor(props){
        super(props)
        this.state={
            asesor_int:''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
      }
      onSubmit(e) {
        //e.preventDefault()
        const rx = this;
        const token = localStorage.usertoken
        const newStatus = {
            asesor_int: this.state.asesor_int,
            status: 'ACTIVO-PRELIMINAR',
            proyecto_id: this.props.id
        }
        console.log(newStatus)
        register(newStatus, token).then(res => { 
          console.log(res)
            if (res.status==='success'){
              this.props.history.push("/proyecto");
              window.location.reload();
        
        }
        })        
      }
      handleSave() {
        const newStatus = {
          asesor_int: this.state.asesor_int,
          status: 'ACTIVO_PRELIMINAR',
          proyecto_id: this.props.id
      }
        this.props.saveModalDetails(newStatus);
    }

    render(){
        return(     
            <div className="modal fade" id="modalAgregar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Asignacion de Asesor</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form >
                        <div className="form-group">
                            <label htmlFor="asesor_int">Ingrese nombre del Asesor Interno:</label>
                            <input
                            type="asesor_int"
                            className="form-control"
                            name="asesor_int"
                            placeholder="Ingresar asesor interno"
                            value={this.state.asesor_int}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button  className="btn btn-primary"  onClick={(e) => this.onSubmit(e)/*() => { this.handleSave() }*/} data-dismiss="modal">Guardar</button>
                    </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default withRouter (AgregarSeguimiento);