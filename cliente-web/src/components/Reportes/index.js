
import PruebaPDF from './PruebaPDF';
import React, { useState } from "react";
import {doc1, doc2, doc3IGE, doc4, doc5,doc6,doc7,doc8,doc9,doc10} from './Directorio'
import {getProyecto} from '../Proyecto/projecto'
import {getPersonal, listAcademicos} from '../Academicos/academicos'
import jwt_decode from 'jwt-decode'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import ejemplo from './ejemplo'
import MainEtapa1 from './Etapa1/MainEtapa1'
import MainEtapa2 from './Etapa2/MainEtapa2'
import { Link } from 'react-router-dom';



export default class index extends React.Component{

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
    //{<Dictamen_INF proyecto={proyecto} ListaPersonal={ListaPersonal}/>/*carrera === 1 ? doc3INF(proyecto, ListaPersonal):doc3IGE(proyecto, ListaPersonal)*/}
    const{error,proyecto, status, personal,}=this.state;
    const ListaPersonal=[];
    let carrera= '';
    (proyecto && proyecto.alumno) && proyecto.alumno.forEach((element, key) => {
        if(key==0){
            carrera = element.carrera_id;
        }
    });

    const estado= 'list-group-item list-group-item-primary'
    if(personal){
    personal.forEach(data => {
      ListaPersonal[data.id]=data.nombre
    });
  }
  
  let etapa = (proyecto.seguimiento ? (proyecto.seguimiento.status=='ACTIVO-PRELIMINAR' ? 1: (proyecto.seguimiento.status==='ACTIVO_FINAL' ? 2: 3)):0 )
  console.log(etapa);
  return (
        <div className="container-fluid">
        <div className="py-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Directorio de Descargas</h1>
            <hr className="my-4"></hr>  
          </div>      
          <div>
          <div className="row">
             <h4 className="col-sm d-flex justify-content-between align-items-center mb-3"><span className="text-muted" style={{fontSize:17, fontSynthesis:'bold'}}>ETAPA 1. TRAMITES PARA REPORTE PRELIMINAR</span></h4>
            </div>
            
              <div align='left' className="col-12 col-md-8" style={{marginBottom: '30px'}} > 
              {//(proyecto.seguimiento && proyecto.seguimiento.status==='ACTIVO-PRELIMINAR') &&   ----list-group-item list-group-item-success
              <ul class="list-group">
            <li className={etapa=== 0 ? 'list-group-item disabled': (etapa>1 ? 'list-group-item list-group-item-success': (etapa ===1 && estado)) }> <div className="row">
                <div className='col-sm' align='left'><h6>1. ASIGNACION DE ASESOR INTERNO:</h6></div>
  <div className='col-sm' align='rigt' >{etapa ===1 && <Link className='btn btn-success' to={{pathname: "/reporte/etapa-1", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:3}}>Ver</Link>}</div>
               </div></li>            
               <li className={etapa=== 0 ? 'list-group-item disabled': (etapa>1 ? 'list-group-item list-group-item-success': (etapa ===1 && estado)) }><div className="row">
                <div className='col-sm' align='left '><h6 >2. AUTORIZACION DE REPORTE PRELIMINAR:</h6></div>
  <div className='col-sm' align='rigt' >{etapa ===1 &&<Link className='btn btn-success' to={{pathname: "/reporte/etapa-1", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:4}}>Ver</Link>}</div>
               </div></li>
               <li className={etapa=== 0 ? 'list-group-item disabled': (etapa>1 ? 'list-group-item list-group-item-success': (etapa ===1 && estado)) }><div className="row">
  <div className='col-sm' align='left '><h6 >3. DICTAMEN DE ANTEPROYECTO:</h6></div>
                
                <div className='col-sm' align='rigt ' >{etapa ===1 &&<Link className='btn btn-success' to={{pathname: "/reporte/etapa-1", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:carrera}}>Ver</Link>}</div>
                
                </div></li>
               </ul>}
              </div>

              <div className="row" >
             <h4 className="col-sm d-flex justify-content-between align-items-center mb-3"><span className="text-muted" style={{fontSize:17, fontSynthesis:'bold'}}>ETAPA 2. TRAMITES PARA REPORTE FINAL</span></h4>
            </div>
              <div align='left' className="col-12 col-md-8" style={{marginBottom: '30px'}} >  
              {//(proyecto.seguimiento && proyecto.seguimiento.status==='ACTIVO_FINAL') &&
              <ul class="list-group">

            <li className={etapa=== 0 || etapa===1  ? 'list-group-item disabled': (etapa===2 ? estado: ('list-group-item list-group-item-success'))}><div className="row" style={{marginBottom:'10px'}}>
                <div className='col-sm' align='left '><h6 >1. ASIGNACION DE REVISOR:</h6></div>
                <div className='col-sm' align='rigt ' >{etapa ===2 &&<Link className='btn btn-success' to={{pathname: "/reporte/etapa-2", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:1}}>Ver</Link>}</div>
               </div>     </li>           
               <li  className={etapa=== 0 || etapa===1  ? 'list-group-item disabled': (etapa===2 ? estado: ('list-group-item list-group-item-success'))}><div className="row" style={{marginBottom:'10px'}}>
                <div className='col-sm' align='left '><h6 >2. APROBACION REPORTE FINAL DE RESIDENCIA:</h6></div>
                <div className='col-sm' align='rigt ' >{etapa ===2 &&<Link className='btn btn-success' to={{pathname: "/reporte/etapa-2", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:2}}>Ver</Link>}</div>
               </div></li>
               <li  className={etapa=== 0 || etapa===1  ? 'list-group-item disabled': (etapa===2 ? estado: ('list-group-item list-group-item-success'))}><div className="row" style={{marginBottom:'10px'}}>
                <div className='col-sm' align='left '><h6 >3. LIBERACION DE REPORTE FINAL:</h6></div>
                <div className='col-sm' align='rigt ' >{etapa ===2 &&<Link className='btn btn-success' to={{pathname: "/reporte/etapa-2", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:3}}>Ver</Link>}</div>
               </div></li>
               </ul>}
              </div>

              <div className="row">
             <h4 className="col-sm d-flex justify-content-between align-items-center mb-3"><span className="text-muted" style={{fontSize:17, fontSynthesis:'bold'}}>ETAPA 3. TRAMITES PARA TITULACION INTEGRAL</span></h4>
            </div>
            <div align='left' className="col-12 col-md-8" style={{marginBottom: '30px'}} >  
            {//(proyecto.seguimiento && proyecto.seguimiento.status==='ACTIVO_TITULACION')&&
            <ul class="list-group">

            <li className={etapa=== 0 || etapa<=2  ? 'list-group-item disabled': (etapa===3 ? estado: ('list-group-item list-group-item-success'))}> <div className="row" style={{marginBottom:'10px'}}>
                <div className='col-sm' align='left ' ><h6 >1. ASIGNACION DE REVISOR PARA TITULACIÓN:</h6></div>
                <div className='col-sm' align='rigt ' >{etapa ===3 &&<Link className='btn btn-success' to={{pathname: "/reporte/etapa-3", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:1}}>Ver</Link>}</div>
               </div>  </li>       
               <li  className={etapa=== 0 || etapa<=2  ? 'list-group-item disabled': (etapa===3 ? estado: ('list-group-item list-group-item-success'))}> <div className="row" style={{marginBottom:'10px'}}>       
                <div className='col-sm' align='left '><h6 >2. APROBACION INFORME FINAL PARA TITULACION INTEGRAL</h6></div>
                <div className='col-sm' align='rigt ' >{etapa ===3 &&<Link className='btn btn-success' to={{pathname: "/reporte/etapa-3", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:3}}>Ver</Link>}</div>
               </div> </li>  
               <li  className={etapa=== 0 || etapa<=2  ? 'list-group-item disabled': (etapa===3 ? estado: ('list-group-item list-group-item-success'))}> <div className="row" style={{marginBottom:'10px'}}>
                <div className='col-sm' align='left '><h6 >3. FORMATO DE REGISTRO DE PROYECTO</h6></div>
                <div className='col-sm' align='rigt ' >{etapa ===3 &&<Link className='btn btn-success' to={{pathname: "/reporte/etapa-3", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:2}}>Ver</Link>}</div>
               </div> </li>  
               <li  className={etapa=== 0 || etapa<=2  ? 'list-group-item disabled': (etapa===3 ? estado: ('list-group-item list-group-item-success'))}> <div className="row" style={{marginBottom:'10px'}}>
                <div className='col-sm' align='left '><h6 >4. LIBERACION DE RESIDENCIA PARA TITULACION INTEGRAL</h6></div>
                <div className='col-sm' align='rigt ' >{etapa ===3 &&<Link className='btn btn-success' to={{pathname: "/reporte/etapa-3", proyecto:proyecto, ListaPersonal:ListaPersonal, doc:4}}>Ver</Link>}</div>
               </div>  </li>  
    </ul>    }     
              </div>
              

        </div>
        </div>
        </div>
    );
    

}
}
/*const doc3INF =(proyecto, ListaPersonal)=>(
      <PDFDownloadLink
      document={<Dictamen_INF data={proyecto} personal={ListaPersonal}/>}
      fileName="Dictamen_INF.pdf"
      style={{
          textDecoration: "none",
          padding: "10px",
          color: "#f6f6f7",
          backgroundColor: "#19b925",             
        }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download Pdf"
      }
    </PDFDownloadLink>
    //<PDFViewer><Dictamen_INF data={proyecto} personal={ListaPersonal}/></PDFViewer>
)*/