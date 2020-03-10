import React, { useState } from "react";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import {Dictamen_IGE} from './Etapa1/Dictamen_IGE'
import {AsignacionRevisor} from './Etapa2/AsignacionRevisor'
import {ReporteFinal} from './Etapa2/ReporteFinal'


export default class  ejemplo extends React.Component{
render(){
  console.log(this.props.location.ListaPersonal
    )
  return(
    <View>
      {this.props.location.doc ===1 &&
    <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><Dictamen_IGE data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
    </View>}
    {this.props.location.doc ===3 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><AsignacionRevisor data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     {this.props.location.doc ===2 &&
     <View><PDFViewer style={{width:'800px', height:'500px', marginTop:'30px'}}><ReporteFinal data={this.props.location.proyecto} personal={this.props.location.ListaPersonal}/></PDFViewer>
     </View>}
     </View>
  )
}
}


const BORDER_COLOR = '#bfbfbf'
const BORDER_STYLE = 'solid'
const COL1_WIDTH = 20
const COLN_WIDTH = 100 - COL1_WIDTH
const styles = StyleSheet.create({
  body: {
    padding: 10
  },
  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  tableCol1Header: { 
    width: COL1_WIDTH + '%', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0,
    align:'left'
  },     
  tableColHeader: { 
    width: COLN_WIDTH + "%", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0
  },   
  tableCol1: { 
    width: COL1_WIDTH + '%', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 ,
    align:'left'
  },   
  tableCol: { 
    width: COLN_WIDTH + "%", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCellHeader: {
    margin: 5, 
    fontSize: 12,
    fontWeight: 500
  },  
  tableCell: { 
    margin: 5, 
    fontSize: 10 
  }
});
/*
export const ejemplo = () => (
  <Document>
    <Page style={styles.body}>
      <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1Header}> 
            <Text style={styles.tableCellHeader}>Product</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>Type</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>Period</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>Price</Text> 
          </View> 
        </View>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>React-PDF</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>3</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>5€</Text> 
          </View> 
        </View> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>Another row</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
        Quijote de la Mancha</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>2019-05-20 - 2020-07-19</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>25€</Text> 
          </View> 
        </View>        
      </View>
    </Page>
  </Document>
);

*/