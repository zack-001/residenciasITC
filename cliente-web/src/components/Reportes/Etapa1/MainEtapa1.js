import React, { useState } from "react";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import {Dictamen_IGE} from './Dictamen_IGE'
import {Dictamen_INF} from './Dictamen_INF'
import {AsignacionAsesor} from './AsignacionAsesor'
import {AutorizacionReporte} from './AutorizacionReporte'



export default class  MainEtapa1 extends React.Component{
render(){
  console.log(this.props.location.ListaPersonal
    )
  return(
    <View>
      {this.props.location.doc ===3 &&
    <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><AsignacionAsesor data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
    </View>}
    {this.props.location.doc ===4 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><AutorizacionReporte data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     {this.props.location.doc ===1 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><Dictamen_INF data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     {this.props.location.doc ===2 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><Dictamen_IGE data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     </View>
  )
}
}
