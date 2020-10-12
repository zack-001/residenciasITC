import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import {styles, Header, tables3, tables2, tables} from '../styles'
import Background from '../../../assets/img/encabezado-dictamen.png'
import Index from '../../Academicos';



export function Dictamen_IGE(props){
//console.log("pdf props", props);
  const dateToFormat = new Date();
  let carrera='';
  const meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  return(
  <Document>
      <Page size="LETTER" orientation='landscape'>

        <View  style={styles.pageBackground}>
        <Image src={Background}  />   
        <View style={{textAlign:'center', fontSize:10, fontFamily: 'Helvetica-Bold'}}>
          <Text>INSTITUTO TECNOLÓGICO DE COMITANCILLO</Text>
          <Text>DEPARTAMENTO DE CIENCIAS ECONOMICO ADMINISTRATIVAS</Text>
          <Text style={{marginTop:20}}>   DICTAMEN DE REPORTE PRELIMINAR DE RESIDENCIAS PROFESIONALES </Text>
  <Text>INGENIERÍA GESTION EMPRESARIAL</Text>
        </View>      
        <View >

        <View style={tables2.table }> 
        <View style={tables2.tableRow}> 
          <View style={tables2.tableCol1}> 
            <Text style={tables.tableCell}>SEMESTRE</Text> 
          </View> 
          <View style={tables2.tableCol}> 
          
          <View style={tables2.tableRow}> 
          <View style={tables2.tableCol1}> 
            <Text style={tables.tableCell}>{dateToFormat.getMonth()<6 ? 'ENERO ' : 'AGOSTO'}</Text> 
          </View> 
          <View style={tables2.tableCol2}> 
          <Text style={tables.tableCell}>{dateToFormat.getFullYear()}</Text> 
          </View> 
         </View>
         <View style={tables2.tableRow}> 
          <View style={tables2.tableCol1}> 
            <Text style={tables.tableCell}>{dateToFormat.getMonth()>6 ? 'ENERO' : 'AGOSTO'}</Text> 
          </View> 
          <View style={tables2.tableCol2}> 
            <Text style={tables.tableCell}>{dateToFormat.getMonth()<6 ? dateToFormat.getFullYear() : dateToFormat.getFullYear()+1}</Text> 
          </View> 
         </View>        
  
          </View>  
        </View>
        </View>
      </View> 



      <View style={tables3.table}> 
       
        <View style={tables3.tableRow}> 
          <View style={tables3.tableCol1}> 
            <Text style={tables3.tableCell}>Num.</Text> 
          </View> 
          <View style={tables3.tableColM}> 
            <Text  style={tables3.tableCell}>CONTROL</Text>
          </View>
          <View style={tables3.tableColE}> 
            <Text  style={tables3.tableCell}>NOMBRE DEL ESTUDIANTE</Text>
          </View>
          <View style={tables3.tableColc}> 
            <Text  style={tables3.tableCell}>S</Text>
          </View>
          <View style={tables3.tableCol}> 
            <Text  style={tables3.tableCell}>ANTEPROYECTO</Text>
          </View>
          <View style={tables3.tableCol}> 
            <Text  style={tables3.tableCell}>EMPRESA</Text>
          </View>

          <View style={tables3.tableCol}> 
            <Text  style={tables3.tableCell}>ASESORES</Text>
            <View style={tables3.tableRow}> 
          <View style={tables3.tableColA}> 
            <Text style={tables3.tableCell}>INTERNO</Text> 
          </View> 
          <View style={tables3.tableColA}> 
            <Text  style={tables3.tableCell}>EXTERNO</Text>
          </View>
          </View>
          </View>

          <View style={tables3.tableColD}> 
            <Text  style={tables3.tableCell}>DICTAMEN</Text>
          </View>
          <View style={tables3.tableColD}> 
            <Text  style={tables3.tableCell}>FECHA DE DICTAMEN</Text>
          </View>
           
         </View> 



         <View style={tables3.tableRow}> 
         <React.Fragment>
             
          <View  style={tables3.tableCol1}> 
          {props.data.alumno && props.data.alumno.map((remark, i) => ( 
           <Text key={i} style={tables2.tableCell}>{i+1}{'\n\n\n'}</Text> 
           ))}
           </View>
              
          <View  style={tables3.tableColM}> 
          {props.data.alumno && props.data.alumno.map((remark, i) => ( 
           <Text  style={tables2.tableCell}>{remark.nc+'\n\n\n'}</Text>
           ))} 
          </View>
         
          <View  style={tables3.tableColE}> 
          {props.data.alumno && props.data.alumno.map((remark, i) => ( 
            <Text key={i}  style={tables2.tableCell}>{remark.nombre+' '+remark.apellido_pat+' '+remark.apellido_mat}</Text>
            ))}
          </View>
          
  
          <View  style={tables3.tableColc}> 
          {props.data.alumno && props.data.alumno.map((remark, i) => ( 
            <Text  key={i} style={tables2.tableCell}>{remark.sexo}{'\n\n\n'}</Text>
            ))}
          </View>
          
          </React.Fragment>
          
          <View style={tables3.tableCol}> 
          <Text  style={tables2.tableCell}>{props.data.nombre}</Text>
          </View>
          <View style={tables3.tableCol}> 
            <Text  style={tables2.tableCell}>{props.data.empresa}</Text>
          </View>
          <View style={tables3.tableCol2}> 
          {props.data.seguimiento ? <Text style={tables2.tableCell}>{props.data.seguimiento.asesor_int}</Text>: <Text>sin datos</Text>}
          </View> 
          <View style={tables3.tableCol2}> 
            <Text  style={tables2.tableCellC}>{props.data.asesor_ext}</Text>
          </View>
          <View style={tables3.tableColD}> 
            <Text  style={tables2.tableCellC}>APROBADO</Text>
          </View>
          <View style={tables3.tableColD}> 
          <Text  style={tables2.tableCell}>{dateToFormat.getUTCDate()+" "+ meses[dateToFormat.getMonth()] +" "+dateToFormat.getUTCFullYear()}</Text>
          </View>
           
         </View> 
         
      </View> 

      <View style={styles.body}>
        <Text>En caso que uno o mas Reporte Preliminar sean rechazados se elaborara otro registro unicamente con los anteproyectos redictaminados</Text>
      </View>

      <View style={{display: "table", width: "690px", marginTop: '1cm' }}>
        <View style={{ margin: "30px", flexDirection: "row" }}>
          <View style={{width:'220px', marginRight:'15px'}}>
          <Text  style={tables3.tableCell}>{props.personal[3]}</Text>
          <Text  style={tables3.tableCell}>NOMBRE Y FIRMA DEL PRESIDENTE DE ACADEMIA</Text>
          <Text  style={{fontFamily:'Helvetica', textAlign:'center', fontSize:'10'}}>Propone</Text>
          </View>
          <View style={{width:'220px', marginRight:'15px'}}>
          <Text  style={tables3.tableCell}>{props.personal[1]}</Text>
          <Text  style={tables3.tableCell}>NOMBRE Y FIRMA DEL JEFE DEL DEPTO. ACADEMICO</Text>
          <Text  style={{fontFamily:'Helvetica', textAlign:'center', fontSize:'10'}}>Valida</Text>
          </View>
          <View style={{width:'205px'}}>
          <Text  style={tables3.tableCell}>{props.personal[4]}</Text>
          <Text  style={tables3.tableCell}>NOMBRE Y FIRMA DEL SUBDIRECTOR ACADEMICO</Text>
          <Text  style={{fontFamily:'Helvetica', textAlign:'center', fontSize:'10'}}>Vo. Bo.</Text>
          </View>
        </View>
      </View>
      
      <View style={{display: "table", width: "690px", bottom:'10px', position:'absolute' }}>
      <View style={{ margin: "50px", flexDirection: "row" }}>
      <View style={{width:'300px'}}>
      <Text   style={{fontSize:8, textAlign:'left'}}>ITCSC-AC-PO-007-04</Text>
      </View>
        <View style={{width:'300px'}}> 
        <Text  style={{fontSize:8, textAlign:'center'}}>Rev. 1</Text>
        </View>
      </View>
      </View>

      </View>
     
      </Page>
    </Document>
  );
}

