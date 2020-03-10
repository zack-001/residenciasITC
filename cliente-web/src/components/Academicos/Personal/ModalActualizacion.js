import React, { Component } from 'react';
import {updatePersonal, update} from '../academicos'
import { withRouter } from 'react-router-dom';

class ModalActualizacion extends Component {

    constructor(props) {
        super(props)
        this.state={
            id: '',
            nombre: '',
            puesto: '',
            updated_by:''
        }
        this.handleSave = this.handleSave.bind(this);
        console.log(this.props)
    }
    componentDidMount(){
        this.setState({
        id:this.props.data.id,
        nombre: this.props.data.nombre,
        puesto: this.props.data.puesto,
        updated_by:this.props.user,
    })
    console.log(this.props.data)
    }
    handleSave() {
        const token = localStorage.usertoken
        const newStatus = {
            nombre: !this.state.nombre ? this.props.data.nombre: this.state.nombre,
            puesto: this.props.data.puesto,
            updated_by: this.props.user,
        }
        console.log(newStatus);
        updatePersonal(newStatus, token, this.props.data.id).then(res => {
            console.log(res.data.status);
            if (res.data.status == 'success'){
                window.location.reload();
        
        }
        })    
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            nombre: nextProps.nombre,
            puesto: nextProps.puesto,
            id: nextProps.id
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    
    render() {
      
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog " role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-nombre" id="exampleModalLabel">Actualizacion</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body" align='left'>
                        <div class="form-group">
                            Nombre:  
                            <input  className="form-control input-lg" name='nombre' value={this.state.nombre} onChange={(e) => this.onChange(e)} />
                        </div>
                        <div class="form-group">
                            Puesto:  
                            <input  className="form-control input-lg" name='puesto' value={this.state.puesto} disabled style={{}} />
                        </div> 
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

export default withRouter(ModalActualizacion);