import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import {styles, Header, tables} from '../styles'

import Background from '../../../assets/img/background.png'

//http://localhost:8000/storage/background.png
const POSTER_PATH = "http://localhost:8000/storage/background.png";




export function AutorizacionReporte(props){
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

        <View style={styles.pageBackground} >
        <Image source={Background} style={styles.pageBackground}/> 
        <View style={styles.asuntoE}>
          <Text>Comitancillo, Oax., <Text>{dateToFormat.toLocaleDateString()}</Text></Text>
          <Text>ASUNTO: <Text style={{ fontFamily:'Times-Bold'}} >AUTORIZACIÓN DE REPORTE PRELIMINAR DE RESIDENCIA PROFESIONAL
</Text></Text>              
          <Text>OFICIO No. CEA-e{dateToFormat.getTime()}</Text>
        </View>
        <View style={styles.destinatario}>
        <Text>{props.personal && props.personal[2]}</Text>
          <Text>JEFE DE LA DIVISIÓN DE ESTUDIOS PROFESIONALES</Text>
          <Text>PRESENTE</Text>
        </View>
        
      <View style={styles.body}>
          <Text>
          {"Por este conducto como asesor del proyecto denominado '"+props.data.nombre+"', que presenta el(los) alumno(s) "+alumnos+', de la carrera de '+carrera+'; después de haber revisado y analizado nos permitimos autorizarlo, para que continúe con los trámites correspondientes.'
          }
          </Text>
       </View>   
      <View style={styles.atte}>
        <Text style={{ fontFamily:'Courier-Bold' }} >A T E N T A M E N T E</Text>
        <Text style={{ fontFamily:'Courier-Bold' }}>Excelencia en Educación Tecnológica®</Text>
        <Text style={{ fontFamily:'Courier-Oblique' }}>“Espíritu Tecnológico, Reflejo de Trabajo y Libertad”</Text>
      </View>
      <View style={styles.destinatario}>
          <Text>LIC. GUILLERMO GARCIA MATUS</Text>
          <Text>JEFE DEL DEPTO.  DE CIENCIAS  ECONOMICAS</Text>
          <Text>ADMINISTRATIVAS</Text>
        </View>
        <View style={styles.destinatarioDer}>
        {props.data.seguimiento ? <Text>{props.data.seguimiento.asesor_int}</Text>: <Text>sin datos</Text>}
        <Text style={{fontFamily: 'Times-Bold'}}>ASESOR INTERNO</Text>
        
      </View>
            <View style={styles.nota}><Text>{`C.c.p Coordinador de Carrera\nC.p.p Expediente`}</Text></View>
      </View>
      </Page>
    </Document>
  );
}

