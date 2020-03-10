import React, { useState } from "react";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import {AsignacionRevTI} from './AsignacionRevTI'
import {RegistroTitulacion} from './RegistroTitulacion'
import {InformeFinal} from './InformeFinal'
import {LiberacionTitulacion} from './LiberacionTitulacion'




export default class  MainEtapa1 extends React.Component{
render(){
  console.log(this.props.location.ListaPersonal
    )
  return(
    <View>
      {this.props.location.doc ===1 &&
    <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><AsignacionRevTI data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
    </View>}
    {this.props.location.doc ===2 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><RegistroTitulacion data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     {this.props.location.doc ===3 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><InformeFinal data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     {this.props.location.doc ===4 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><LiberacionTitulacion data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     </View>
  )
}
}
