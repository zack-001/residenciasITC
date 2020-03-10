import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import {styles, Header, tables} from '../styles'

import Background from '../../../assets/img/background.png'


export function LiberacionReporte(props){
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
        <View style={styles.asunto}>
          <Text style={{marginRight:'30px'}}>San Pedro Comitancillo, Oax., <Text>{dateToFormat.toLocaleDateString()}</Text></Text>
        </View>
        <View style={styles.destinatario}>
        <Text>{props.personal && props.personal[2]}</Text>
          <Text>JEFE DE LA DIVISIÓN DE ESTUDIOS PROFESIONALES</Text>
          <Text>PRESENTE</Text>
        </View>
        
        <View style={styles.body}>
          <Text style={{fontFamily:'Times-Roman', fontSize:11}}>
          {'\n'}Hago de su conocimiento que el <Text style={{fontFamily:'Times-Bold'}}>REPORTE FINAL DE RESIDENCIA PROFESIONAL</Text> denominado(a): <Text style={{fontFamily:'Times-Bold'}}>{props.data.nombre}</Text>,
           que presenta el(los) alumno(s) <Text style={{fontFamily:'Times-Bold'}}>{alumnos}</Text>, Alumno (a) (s) de la carrera de  <Text style={{fontFamily:'Times-Bold'}}>{carrera}</Text>
           ,el cual una vez revisado(a) y aprobado(a, este departamento tiene a bien autorizar, para que continúe con los trámites correspondientes.
          
            {'\n\n'}Asimismo le notifico de la participación del <Text style={{fontFamily:'Times-Bold'}}>{props.data.seguimiento ?props.data.seguimiento.asesor_int:'sin-datos'}</Text>, como asesor de dicho REPORTE FINAL.

           {'\n\n'}Lo anterior fundamentado en el objetivo 1.2.2.5 del Manual de procedimientos para la planeación, operación y acreditación de las residencias profesionales.

          </Text>
       </View>      
      <View style={styles.atte}>
        <Text style={{ fontFamily:'Courier-Bold' }} >{'\n'}A T E N T A M E N T E</Text>
        <Text style={{ fontFamily:'Courier-Bold' }}>Excelencia en Educación Tecnológica®</Text>
        <Text style={{ fontFamily:'Courier-Oblique' }}>“Espíritu Tecnológico, Reflejo de Trabajo y Libertad”</Text>
      </View>
      <View style={styles.destinatario}>
          <Text>{'\n\n'}LIC. GUILLERMO GARCIA MATUS</Text>
          <Text>JEFE DEL DEPTO.  DE CIENCIAS  ECONOMICAS</Text>
          <Text>ADMINISTRATIVAS</Text>
        </View>
        
        <View style={styles.nota}><Text>{`\nC.c.p Coordinador de Carrera\nC.p.p Expediente`}</Text></View>
      </View>
      </Page>
    </Document>
  );
}

