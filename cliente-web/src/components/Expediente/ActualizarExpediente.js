import React, { Component } from 'react'
import {update} from './expediente'
import axios from 'axios';
import jwt_decode from 'jwt-decode'


export default class ActualizarExpediente extends Component {
  
  constructor(props) {
    
    super(props)
    this.state = {
        expediente:this.props.location.state,
        file:'',
    }
    this.onChange = this.onChange.bind(this)
}



submit(e) {    
  e.preventDefault();  
  console.log(this.state);
  const token = localStorage.usertoken  
  const decoded = jwt_decode(token);
  const url = `http://localhost:8000/api/expediente/updateFile/`+this.props.location.state.id;
  const formData = new FormData();    
  

  this.state.file ? formData.append('doc_dir', this.state.file) : formData.append('doc_dir', this.props.location.state.doc_dir); 
  this.state.expediente.nombre ? formData.append('nombre', this.state.expediente.nombre):  formData.append('nombre', this.props.location.state.nombre); 
  formData.append('user_id', decoded.sub); 
  formData.append('descripcion', (this.state.expediente.descripcion ? this.state.expediente.descripcion :this.props.location.state.descripcion)); 
  
  axios.defaults.headers.common['Authorization'] = token;  
  //axios.defaults.headers.put 
  const config = {    
    headers: {'content-type': 'multipart/form-data',}    
  };    
  console.log(formData.get('doc_dir'))
  //const data={nombre: formData.get('nombre'), descripcion: formData.get('descripcion'), file:formData, user_id:formData.get('user_id'),}
  return axios.post(url,formData, config).then(response => {
    console.log(response);
    if(response.data.status === 'success'){
      this.props.history.push(`/expediente`)
    }else{
      alert("No se ha podido actualizar los datos");
    }
  });
  /*update(this.props.location.state.id, formData, token, ).then(res => {
    console.log(res)
      })
*/
}    


setFile(e) {    
  if(e.target.files[0].size > 3145728){
    alert("El archivo excede los limites, intente nuevamente");
    this.value = "";
 }else{
  this.setState({ file: e.target.files[0] });  
 }  
}





onChange(e) {
    this.setState({ expediente:{[e.target.name]: e.target.value}})     
  }
  
  /*static getDerivedStateFromProps(props, state) {

    if (state.expediente.descripcion == props.location.state.descripcion) {
      this.setState({expediente.descripcion  });
    }
    if (state.expediente.nombre == props.location.state.nombre) {
      this.fetchData(props.location.state.nombre);
    }
  }*/

render(){
  const {expediente} = this.state
      console.log(this.props.location.state)

  return(
    <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form  onSubmit={e=>this.submit(e)}  encType="multipart/form-data">
              <h1 className="h3 mb-3 font-weight-normal">SUBA SU ARCHIVO</h1>
              
              <div className="form-group">
                <label htmlFor="nombre">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ej., Dictamen----"
                  value={expediente.nombre}
                  onChange={this.onChange}
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="file">Seleccione su archivo: </label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  placeholder="Ej., Dictamen----"
                 
                  //ref={this.fileInput}
                  onChange={e => this.setFile(e)}/*{this.onChange}//{e => 
                    this.handleChangeFile(e.target.files[0])}*/
                />
              </div>
              
              <div className="form-group">
            <label for="exampleFormControlTextarea3">Descripción</label>
            <textarea htmlFor="descripcion" className="form-control" id="exampleFormControlTextarea3" rows="5" placeholder="Write something here..."
                name="descripcion"
                value={expediente.descripcion}
                onChange={this.onChange}>

            </textarea>
            </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Actualizar!
              </button>
            </form>
          </div>
        </div>
      </div>
      )
  }
}
