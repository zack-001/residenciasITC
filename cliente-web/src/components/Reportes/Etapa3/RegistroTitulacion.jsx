import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import {tables2} from './styles'
import {styles, tables} from '../styles'
import Background from '../../../assets/img/background.png'
import Index from '../../Academicos';
import {getImage} from '../../Academicos/academicos'



export function RegistroTitulacion(props){
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
        <Text style={{fontSize:14, fontFamily:'Helvetica-Bold', marginTop:'5cm', marginLeft:'2cm',marginRight:'3cm'}}>A<Text style={{fontSize:12}}>NEXO</Text> XXXII. F<Text style={{fontSize:12}}>ORMATO DE REGISTRO DE PROYECTO PARA LA </Text>T<Text style={{fontSize:12}}>ITULACIÓN </Text>I<Text style={{fontSize:12}}>NTEGRAL </Text></Text>
        <View style={{marginTop:'1cm', textAlign:'right', fontSize:12, marginRight:'2cm',}}>
          <Text>Asunto: <Text>Registro de proyecto para la titulación integral. </Text></Text>              
        </View>
        <View style={styles.destinatario2}>
        
          {props.data.seguimiento ? <Text style={{textTransform:'uppercase'}}>{props.data.seguimiento.asesor_int}</Text>: <Text>sin datos</Text>}
       
          <Text>Jefe de la División de Estudios Profesionales </Text>
          <Text>PRESENTE</Text>
        </View>
        <View style={styles.body2}>
          <Text>Departamento de: <Text style={{textDecoration:'underline'}}>Ciencias Económico Administrativas. </Text></Text>       
  <Text>Lugar:<Text style={{textDecoration:'underline'}}> San Pedro Comitancillo, Oax </Text>         Fecha:<Text style={{textDecoration:'underline'}}>{dateToFormat.toLocaleDateString()}</Text></Text>
        </View>
        <View style={tables.table}> 

         <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell}>Nombre del Proyecto</Text> 
          </View> 
          <View style={tables.tableCol}> 
            <Text style={tables.tableCell}>{props.data.nombre}</Text> 
          </View> 
         </View>
        
         <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell}>Nombre del asesor: </Text> 
          </View> 
          <View style={tables.tableCol}> 
            <Text style={tables.tableCell}>{props.data.seguimiento ? props.data.seguimiento.asesor_int: 'sin-datos'}</Text> 
          </View></View>
        
          <View style={tables.tableRow}> 
          <View style={tables.tableCol1}> 
            <Text style={tables.tableCell}>Número de estudiantes: </Text> 
          </View> 
          <View style={tables.tableCol}> 
            <Text style={tables.tableCell}>{props.data.num_residentes}</Text> 
          </View> 
         </View>
                
      </View>
      <View style={styles.body}>
          <Text>Datos del (de los) estudiante(s):</Text>
        </View>   
        <View style={tables2.table}> 

            <View style={tables2.tableRow}> 
             <View style={tables2.tableCol}> 
               <Text style={tables2.tableCell}>Nombre</Text> 
             </View> 
             <View style={tables2.tableCol}> 
               <Text style={tables2.tableCell}>Numero de Control</Text> 
             </View>
             <View style={tables2.tableCol}> 
               <Text style={tables2.tableCell}>Carrera</Text> 
             </View>  
            </View>
            <React.Fragment>
            {props.data.alumno && props.data.alumno.map((data, i)=>(
            <View key={i} style={tables2.tableRow}> 
             <View style={tables2.tableCol}> 
            <Text style={tables2.tableCell}>{data.nombre+' '+data.apellido_pat+' '+data.apellido_mat}</Text> 
             </View> 
             <View style={tables2.tableCol}> 
               <Text style={tables2.tableCell}>{data.nc}</Text> 
             </View>
             <View style={tables2.tableCol}> 
            <Text style={tables2.tableCell}>{data.carrera_id === 1 ?'INGENIERIA EN INFORMATICA':[data.carrera_id===2 ? 'INGENIERIA EN GESTION EMPRESARIAL':[data.carrera_id===3 ? 'INGENIERIA EN AGRONOMIA'  : 'INGENIERIA EN INDUSTRIAS ALIMENTARIAS' ]]}</Text> 
             </View>  
            </View>
            ))}
            </React.Fragment>
       
        </View>

        <View style={tables2.table2}>
            <Text style={{fontSize:9, paddingBottom:'20px', paddingTop:'10px'}}>Observaciones:</Text>
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
          <Text style={{fontSize:9, marginTop:'1cm', fontFamily:'Helvetica'}}>{`C.p.p Expediente`}</Text>
        </View>
 
      </View>
      </Page>
    </Document>
  );
}

