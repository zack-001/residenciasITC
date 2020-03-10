import React, { Component } from 'react';
import {update} from './seguimiento'
import { withRouter } from 'react-router-dom';

class Modal extends Component {

    constructor(props) {
        super(props)
        this.state={
            id: '',
            asesor_int: '.',
            status: '.',
        }
        this.handleSave = this.handleSave.bind(this);
    }
    componentWillMount(){
        this.setState({
        id:this.props.data.id,
        asesor_int: this.props.data.asesor_int,
        status: this.props.data.status,
    })
    console.log(this.props.data)
    }
    handleSave() {
        const token = localStorage.usertoken
        const newStatus = {
            asesor_int: !this.state.asesor_int ? this.props.data.asesor_int: this.state.asesor_int ,
            status: !this.state.status ? this.props.data.status: this.state.status,
        }
        console.log(newStatus);
        update(newStatus, token, this.props.data.id).then(res => {
            console.log(res);
            if (res.status==='success'){
              this.props.history.push("/proyecto");       
        }
        })    
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            asesor_int: nextProps.asesor_int,
            status: nextProps.status,
            id: nextProps.id
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    
    render() {
        /*let recipient;
        document.getElementById('#exampleModal').on('show.bs.modal', function (event) {
            let button = document.getElementById(event.relatedTarget) // Button that triggered the modal
            recipient = button.data('whatever')
        });*/
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-asesor_int" id="exampleModalLabel">Actualizacion</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Asesor Interno:  </span>
                            <input name='asesor_int' value={this.state.asesor_int} onChange={(e) => this.onChange(e)} /></p>
                            <label>
                            Seleccione el numero de integrantes del proyecto:  
                                <select  name="status" value={this.state.status} onChange={(e) => this.onChange(e)}>
                                    <option class="small" value="ACTIVO-PRELIMINAR">ACTIVO_PRELIMINAR</option>
                                    <option class="small" value="ACTIVO_FINAL">ACTIVO_FINAL</option>
                                    <option class="small" value="ACTIVO_TITULACION">ACTIVO_TITULACION</option>
                                    <option class="small" value="DESACTIVO">DESACTIVO</option>
                                    <option class="small" value="RECHAZADO">RECHAZADO</option>
                                </select>
                            </label>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Modal);