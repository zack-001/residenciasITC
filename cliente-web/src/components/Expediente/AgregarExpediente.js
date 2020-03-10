import React, { Component } from 'react'
import axios from 'axios';
export default class DefaultExpediente extends Component {
  
  constructor(props) {
    
    super(props)
    this.state = {
        nombre:'',
        descripcion:'',
        file:'',
    }
    this.onChange = this.onChange.bind(this)
    /*this.fileInput = React.createRef();
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)*/
}

submit(e) {    
   e.preventDefault();  
   const token = localStorage.usertoken  
  const url = `http://localhost:8000/api/expedientes`;    
  const formData = new FormData();    
  formData.append('file', this.state.file); 
  formData.append('nombre', this.state.nombre); 
  formData.append('descripcion', this.state.descripcion); 
  axios.defaults.headers.common['Authorization'] = token;   
  const config = {    
    headers: {'content-type': 'multipart/form-data',},    
  };    
  return axios.post(url, formData, config).then(response => {
    console.log(response);
    if(response.data.status === 'success'){
      this.props.history.push(`/profile`)
    }
  }); 

}    

setFile(e) {    
  if(e.target.files[0].size >  3145728){
    alert("El archivo excede el limite de 3Mb");
    this.value = "";
 };
  this.setState({ file: e.target.files[0] });    
}





onChange(e) {

    this.setState({ [e.target.name]: e.target.value})
    /*  if([e.target.name]!=='doc_dir'){
        this.setState({ [e.target.name]: e.target.value})
    }else{
        //this.setState({doc_dir:e.target.files[0]})*/
        
         
  }

   handleFile=(e)=>{
    const content = e.target.result;
    console.log('file content',  content)
    // You can set content in state and show it in render.
    const FormData ={doc_dir: e.target.result}
    this.setState(FormData);    

  }
  
  handleChangeFile=(event)=>{
    var files =  event.target.files[0]
     this.setState({
     doc_dir: files
      
  })
}
  /*
    let reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = this.handleFile;
    //this.setState({doc_dir: reader})
    //reader.readAsText(file);
    /*reader.onload=(file)=>{
      console.warn('img data'+ file.target.result)
    }
  }*/


  render(){
      return(
        <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form  onSubmit={e => this.submit(e)}  encType="multipart/form-data">
              <h1 className="h3 mb-3 font-weight-normal">SUBA SU ARCHIVO</h1>
              
              <div className="form-group">
                <label htmlFor="nombre">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ej., Dictamen----"
                  value={this.state.nombre}
                  onChange={this.onChange}
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="doc_dir">Seleccione su archivo: </label>
                <input
                  type="file"
                  className="form-control"
                  name="doc_dir"
                  placeholder="Ej., Dictamen de Anteproyecto"
                  //value={this.state.doc_dir}
                  //ref={this.fileInput}
                  onChange={e => this.setFile(e)}/*{this.onChange}//{e => 
                    this.handleChangeFile(e.target.files[0])}*/
                />
              </div>
              
              <div className="form-group">
            <label for="exampleFormControlTextarea3">Descripción</label>
            <textarea htmlFor="descripcion" className="form-control" id="exampleFormControlTextarea3" rows="5" 
                name="descripcion"
                value={this.state.descripcion}
                onChange={this.onChange}>

            </textarea>
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
