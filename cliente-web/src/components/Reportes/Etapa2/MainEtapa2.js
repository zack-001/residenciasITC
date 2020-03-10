import React, { useState } from "react";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import {AsignacionRevisor} from './AsignacionRevisor'
import {ReporteFinal} from './ReporteFinal'
import {LiberacionReporte} from './LiberacionReporte'



export default class  MainEtapa2 extends React.Component{
render(){
  console.log(this.props.location.ListaPersonal
    )
  return(
    <View>
      {this.props.location.doc ===1 &&
    <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><AsignacionRevisor data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
    </View>}
    {this.props.location.doc ===2 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><ReporteFinal data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     {this.props.location.doc ===3 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><LiberacionReporte data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     </View>
  )
}
}
