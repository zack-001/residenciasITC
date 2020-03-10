import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import {styles, Header, tables} from '../styles'
import Background from '../../../assets/img/background.png'
import Index from '../../Academicos';
import {getImage} from '../../Academicos/academicos'



export function AsignacionRevTI(props){
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
          <Text>ASUNTO: <Text style={{ fontFamily:'Times-Bold' }}>Asignación de Revisor para Reporte final Para titulación integral</Text></Text>              
          <Text>OFICIO No. CEA-e{dateToFormat.getTime()}</Text>
        </View>
        <View style={styles.destinatario}>
        
          {props.data.seguimiento ? <Text style={{textTransform:'uppercase'}}>{props.data.seguimiento.asesor_int}</Text>: <Text>sin datos</Text>}
       
          <Text>CATEDRATICO DEL I.T COMITANCILLO</Text>
          <Text>PRESENTE</Text>
        </View>
        <View style={styles.body}>
          <Text>Por este conducto solicito a usted tenga a bien revisar como asesor la titulación integral en la opción de Reporte Final de Residencia Profesional  que se acompaña, 
              emitiendo su aprobación o bien, señalando las observaciones que considere pertinentes para mejorar la calidad del mismo.  Asimismo, le informo que tiene 10 días 
              hábiles para revisar y reportar a este depto.</Text>       
        </View>
        <View style={tables.table}> 
        <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell}>a) Nombre Residente(s):</Text> 
          </View> 
          <View style={tables.tableCol}> 
          <React.Fragment>
            {props.data.alumno ? props.data.alumno.map((remark, i) => ( carrera = remark.carrera_id,
            <Text  key={i} style={tables.tableCell}>{remark.nombre} {remark.apellido_pat} {remark.apellido_mat}</Text>
            )): <Text  style={tables.tableCell}>sin datos</Text>}
          </React.Fragment>         
          </View>  
        </View> 
        <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell}>b) Carrera</Text> 
          </View> 
          <View style={tables.tableCol}> 
            <Text  style={tables.tableCell}>{carrera === 1 ?'INGENIERIA EN INFORMATICA':[carrera===2 ? 'INGENIERIA EN GESTION EMPRESARIAL':[carrera===3 ? 'INGENIERIA EN AGRONOMIA'  : 'INGENIERIA EN INDUSTRIAS ALIMENTARIAS' ]]}</Text>
          </View> 
         </View>
         <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell}>c) Nombre del Proyecto</Text> 
          </View> 
          <View style={tables.tableCol}> 
            <Text style={tables.tableCell}>{props.data.nombre}</Text> 
          </View> 
         </View>
                
      </View>
      <View style={styles.body}>
          <Text>
          {`Agradezco de antemano su valioso apoyo en esta importante actividad para la formación profesional de nuestro estudiantado.`}
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
            <View style={styles.nota}><Text>{`C.c.p Coordinador de Carrera\nC.p.p Expediente`}</Text></View>
      </View>
      </Page>
    </Document>
  );
}

