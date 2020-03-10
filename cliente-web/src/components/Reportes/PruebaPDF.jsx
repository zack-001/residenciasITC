import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';


import {AutorizacionReporte} from './Etapa1/AutorizacionReporte';
import {AsignacionAsesor} from './Etapa1/AsignacionAsesor'
import {Dictamen_INF} from './Etapa1/Dictamen_INF'
import {Dictamen_IGE} from './Etapa1/Dictamen_IGE'

import {AsignacionRevisor} from './Etapa2/AsignacionRevisor'
import {ReporteFinal} from './Etapa2/ReporteFinal'
import {LiberacionReporte} from './Etapa2/LiberacionReporte'


import {AsignacionRevTI} from './Etapa3/AsignacionRevTI'
import {InformeFinal} from './Etapa3/InformeFinal'
import {RegistroTitulacion} from './Etapa3/RegistroTitulacion'
import {LiberacionTitulacion} from './Etapa3/LiberacionTitulacion'


import ReactPDF from '@react-pdf/renderer';
import {getProyecto} from '../Proyecto/projecto'
import {getPersonal} from '../Academicos/academicos'
import jwt_decode from 'jwt-decode'


class PruebaPDF extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      error: '',
      proyecto: [],
      status:[]
    }
  }
  componentWillMount(){
    const token = localStorage.usertoken
    const decoded = jwt_decode(token);  
    console.log(decoded);
    getProyecto(this, decoded.sub);
    getPersonal(this);
  }
  
 
  render(){
    
    const{error,proyecto, status, personal,}=this.state;
    const ListaPersonal=[];
    console.log(personal)
    
    if(personal){
    personal.forEach(data => {
      ListaPersonal[data.id]=data.nombre
    });
  }
    console.log(ListaPersonal)
    return (
 //<AutorizacionReporte data={proyecto} personal={ListaPersonal}/>
 <div>
  <PDFDownloadLink
  document={<LiberacionTitulacion data={proyecto} personal={ListaPersonal}/>}
  fileName="movielist.pdf"
  style={{
    textDecoration: "none",
    padding: "10px",
    color: "#4a4a4a",
    backgroundColor: "#f2f2f2",
    border: "1px solid #4a4a4a"
  }}

>
  {({ blob, url, loading, error }) =>
    loading ? "Loading document..." : "Download Pdf"
  }
</PDFDownloadLink>
</div>
      );
         
  }
}
export default PruebaPDF;
function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  //xhr.responseType = 'blob';
  xhr.send();
}
 



/*
export default function PruebaPDF() {
  const [proyecto, status, error] = useState([]);
  const token = localStorage.usertoken
    const decoded = jwt_decode(token);  
    console.log(decoded);
    getProyecto(this, decoded.sub);

  return (
 
    <PDFDownloadLink
    document={<MyDocument data={proyecto}/>}
    fileName="movielist.pdf"
    style={{
      textDecoration: "none",
      padding: "10px",
      color: "#4a4a4a",
      backgroundColor: "#f2f2f2",
      border: "1px solid #4a4a4a"
    }}
  
  >
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download Pdf"
    }
  </PDFDownloadLink>
    );
}


*/

/*export default function PruebaPDF(){

  return (
 
  <PDFDownloadLink
  document={<MyDocument data={}/>}
  fileName="movielist.pdf"
  style={{
    textDecoration: "none",
    padding: "10px",
    color: "#4a4a4a",
    backgroundColor: "#f2f2f2",
    border: "1px solid #4a4a4a"
  }}

>
  {({ blob, url, loading, error }) =>
    loading ? "Loading document..." : "Download Pdf"
  }
</PDFDownloadLink>
  );}
*/

