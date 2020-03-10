import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import {styles, Header, tables} from '../styles'
import Background from '../../../assets/img/background.png'
import Index from '../../Academicos';
import {getImage} from '../../Academicos/academicos'


export function LiberacionTitulacion(props){
console.log("pdf props", props);
  const dateToFormat = new Date();
  let carrera='';
  let img='';
  //getImage().then(res=> img=res);
  return(
  <Document>
      <Page size="LETTER" >

        <View  style={styles.pageBackground}>
        <Image src={Background}  style={styles.pageBackground}/> 
        <View style={styles.asunto}>
          <Text>Comitancillo, Oax., <Text>{dateToFormat.toLocaleDateString()}</Text></Text>
          <Text>ASUNTO: <Text style={{ fontFamily:'Times-Bold' }}>Liberación de Residencia Profesional para {'\n'} titulación integral</Text></Text>              
        </View>
        <View style={styles.destinatario}>
        
          {props.data.seguimiento ? <Text style={{textTransform:'uppercase'}}>{props.data.seguimiento.asesor_int}</Text>: <Text>sin datos</Text>}
       
          <Text>JEFE DE LA DIVISIÓN DE ESTUDIOS PROFESIONALES</Text>
          <Text>PRESENTE</Text>
        </View>
        <View style={styles.body}>
          <Text>Por este medio le informo que ha sido liberado el siguiente proyecto de Residencia Profesional: </Text>       
        </View>
        <View style={tables.table}> 
        <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell2}>a) Nombre del egresado:</Text> 
          </View> 
          <View style={tables.tableCol}> 
          <React.Fragment>
            {props.data.alumno ? props.data.alumno.map((remark, i) => ( carrera = remark.carrera_id,
            <Text  key={i} style={tables.tableCell2}>{remark.nombre} {remark.apellido_pat} {remark.apellido_mat}</Text>
            )): <Text  style={tables.tableCell2}>sin datos</Text>}
          </React.Fragment>         
          </View>  
        </View> 
        <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell2}>b) Carrera</Text> 
          </View> 
          <View style={tables.tableCol}> 
            <Text  style={tables.tableCell2}>{carrera === 1 ?'INGENIERIA EN INFORMATICA':[carrera===2 ? 'INGENIERIA EN GESTION EMPRESARIAL':[carrera===3 ? 'INGENIERIA EN AGRONOMIA'  : 'INGENIERIA EN INDUSTRIAS ALIMENTARIAS' ]]}</Text>
          </View> 
         </View>
        <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell2}>c) Numero de Control</Text> 
          </View> 
          <React.Fragment>
          <View style={tables.tableCol}> 
          {props.data.alumno && props.data.alumno.map(data=>(
<Text  style={tables.tableCell2}>{data.nc}</Text>
            ))}
           </View> 
          </React.Fragment>
         </View>
         <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell2}>d) Nombre del Proyecto</Text> 
          </View> 
          <View style={tables.tableCol}> 
            <Text style={tables.tableCell2}>{props.data.nombre}</Text> 
          </View> 
         </View>
         <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell2}>e) Producto</Text> 
          </View> 
          <View style={tables.tableCol}> 
            <Text style={tables.tableCell2}>REPORTE FINAL DE RESIDENCIA PROFESIONAL PARA TITULACION INTEGRAL</Text> 
          </View> 
         </View>        
      </View>
      <View style={styles.body}>
          <Text>
          {`Agradezco de antemano su valioso apoyo en esta importante actividad para la formación profesional de nuestro egresados.`}
          </Text>
       </View>   
      <View style={styles.atte}>
        <Text style={{ fontFamily:'Courier-Bold' }} >A T E N T A M E N T E</Text>
        <Text style={{ fontFamily:'Courier-Bold' }}>Excelencia en Educación Tecnológica®</Text>
        <Text style={{ fontFamily:'Courier-Oblique' }}>“Espíritu Tecnológico, Reflejo de Trabajo y Libertad”</Text>
      </View>
      <View style={styles.destinatario}>
          <Text>{props.personal[1]}</Text>
          <Text>JEFE DEL DEPTO.  DE CIENCIAS  ECONOMICAS</Text>
          <Text>ADMINISTRATIVAS</Text>
        </View>
        <View style={{marginRight: '2cm',  marginTop: '1cm', textAlign: 'right', fontSize: '10'}}>
        {props.data.seguimiento ? <Text>{props.data.seguimiento.asesor_int}</Text>: <Text>sin datos</Text>}
        <Text style={{fontFamily: 'Times-Bold'}}>ASESOR INTERNO</Text>
        
      </View>
            <View style={styles.nota}><Text>{`C.p.p Expediente`}</Text></View>
      </View>
      </Page>
    </Document>
  );
}

