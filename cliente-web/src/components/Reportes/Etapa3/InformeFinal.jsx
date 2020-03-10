import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import {styles, Header, tables} from '../styles'

import Background from '../../../assets/img/background.png'

//http://localhost:8000/storage/background.png
const POSTER_PATH = "http://localhost:8000/storage/background.png";




export function InformeFinal(props){
  const dateToFormat = new Date();
  let carrera='';
  if(props.data.alumno){
    props.data.alumno.map((element, index) => {
      if(index==0){
        carrera= element.carrera_id == 1 ?'INGENIERIA EN INFORMATICA':[element.carrera_id===2 ? 'INGENIERIA EN GESTION EMPRESARIAL':[element.carrera_id===3 ? 'INGENIERIA EN AGRONOMIA'  : 'INGENIERIA EN INDUSTRIAS ALIMENTARIAS' ]]
      }
    });
  }
  console.log(carrera)
  let alumnos= props.data.alumno ? props.data.alumno.map((alumno, index)=>(" "+alumno.nombre+" "+alumno.apellido_pat+" "+alumno.apellido_mat)): '';
  //carrera= aux === 1 ?'INGENIERIA EN INFORMATICA':[aux===2 ? 'INGENIERIA EN GESTION EMPRESARIAL':[aux===3 ? 'INGENIERIA EN AGRONOMIA'  : 'INGENIERIA EN INDUSTRIAS ALIMENTARIAS' ]]
  console.log(alumnos)
  return(
  <Document>
      <Page size="LETTER" >

        <View style={{marginLeft:'25px', marginRight:'25px'}} > 
        <Text style={{fontFamily:'Times-Bold', fontSize:11, textAlign:'center', marginTop:'3cm'}}>INSTITUTO TECNOLÓGICO DE COMITANCILLO.</Text>
        <View style={{textAlign:'right', fontSize:11, marginTop:'25px', marginRight:'2cm', marginLeft:'6cm'}}>
          <Text style={{ fontFamily:'Times-Roman'}}>ASUNTO: <Text style={{ fontFamily:'Times-Bold'}}>INFORME FINAL DE RESIDENCIA PROFESIONAL PARA TITULACIÓN INTEGRAL</Text></Text>              
          <Text style={{ fontFamily:'Times-Roman', marginTop:'1cm'}}>Comitancillo, Oax., <Text>{dateToFormat.toLocaleDateString()}</Text></Text>
        </View>
        <View style={styles.destinatario}>
        <Text style={{fontSize:11}}>{props.personal && props.personal[1]}</Text>
          <Text style={{fontSize:11}}>JEFE DEL DEPTO. DE C.E.A</Text>
          <Text style={{fontSize:11}}>PRESENTE:</Text>
        </View>
        
      <View style={styles.body}>
          <Text style={{fontFamily:'Times-Roman', fontSize:11}}>
          Por este conducto como asesor del <Text style={{fontFamily:'Times-Bold'}}>INFORME FINAL DE RESIDENCIA PROFESIONAL PARA TITULACIÓN INTEGRAL</Text> que lleva por título: “<Text style={{fontFamily:'Times-Bold'}}>{props.data.nombre}</Text>,
          ”, que presenta(n) el(los) alumno(s) <Text style={{fontFamily:'Times-Bold'}}>{alumnos}</Text>, de la carrera de <Text style={{fontFamily:'Times-Bold'}}>{carrera}</Text>; después de haber revisado y analizado nos permitimos autorizarlo, para que continúe con los trámites correspondientes.
          
          </Text>
       </View>   
      <View style={{ fontSize:11, textAlign:'center', marginTop:'1cm'}}>
        <Text style={{ fontFamily:'Times-Bold'}} >{'\n\n'}A T E N T A M E N T E</Text>
        <Text style={{ fontFamily:'Times-Bold', marginTop:'2cm'}} >{props.data.seguimiento ? props.data.seguimiento.asesor_int: 'sin-datos'}</Text>
        <Text style={{ fontFamily:'Times-Bold' }} >ASESOR</Text>
      </View>
      
    
        
        <View style={{marginLeft:'2cm', fontSize:9, textAlign:'left', marginTop:'4cm'}}><Text>{`C.c.p.- El archivo `}</Text></View>
      </View>
      </Page>
    </Document>
  );
}

