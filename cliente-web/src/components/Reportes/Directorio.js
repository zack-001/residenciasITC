import React, { Component }  from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';


import {AutorizacionReporte} from './Etapa1/AutorizacionReporte';
import {AsignacionAsesor} from './Etapa1/AsignacionAsesor'
import {Dictamen_IGE} from './Etapa1/Dictamen_IGE'

import {AsignacionRevisor} from './Etapa2/AsignacionRevisor'
import {ReporteFinal} from './Etapa2/ReporteFinal'
import {LiberacionReporte} from './Etapa2/LiberacionReporte'


import {AsignacionRevTI} from './Etapa3/AsignacionRevTI'
import {InformeFinal} from './Etapa3/InformeFinal'
import {RegistroTitulacion} from './Etapa3/RegistroTitulacion'
import {LiberacionTitulacion} from './Etapa3/LiberacionTitulacion'


import ReactPDF from '@react-pdf/renderer';


export const doc1 =(proyecto, ListaPersonal)=>{
    return(
    <PDFDownloadLink
      document={<AsignacionAsesor  data={proyecto} personal={ListaPersonal}/>}
      fileName="AsignacionAsesor.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#f6f6f7",
        backgroundColor: "#19b925",             
      }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando Pdf..." : "Descargar Pdf"
      }
    </PDFDownloadLink>
    )
}


export const doc2 =(proyecto, ListaPersonal)=>{
    return(
    <PDFDownloadLink
      document={<AutorizacionReporte  data={proyecto} personal={ListaPersonal}/>}
      fileName="AutorizacionReporte.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#f6f6f7",
        backgroundColor: "#19b925",             
      }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando Pdf..." : "Descargar Pdf"
      }
    </PDFDownloadLink>
    )
}
/*export const doc3INF =(proyecto, ListaPersonal)=>{
    return(
        <PDFDownloadLink
        document={<Dictamen_INF data={proyecto} personal={ListaPersonal}/>}
        fileName="Dictamen_INF.pdf"
        style={{
            textDecoration: "none",
            padding: "10px",
            color: "#f6f6f7",
            backgroundColor: "#19b925",             
          }}
      
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>
      //<PDFViewer><Dictamen_INF data={proyecto} personal={ListaPersonal}/></PDFViewer>
    )
}*/
export const doc3IGE =(proyecto, ListaPersonal)=>{
    return(
        <PDFDownloadLink
        document={<Dictamen_IGE data={proyecto} personal={ListaPersonal}/>}
        fileName="Dictamen_IGE.pdf"
        style={{
            textDecoration: "none",
            padding: "10px",
            color: "#f6f6f7",
            backgroundColor: "#19b925",             
          }}
      
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>
    )
}
export const doc4 =(proyecto, ListaPersonal)=>{
    return(
    <PDFDownloadLink
      document={<AsignacionRevisor  data={proyecto} personal={ListaPersonal}/>}
      fileName="AsignacionRevisor.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#f6f6f7",
        backgroundColor: "#19b925",             
      }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando Pdf..." : "Descargar Pdf"
      }
    </PDFDownloadLink>
    )
}
export const doc5 =(proyecto, ListaPersonal)=>{
    return(
    <PDFDownloadLink
      document={<ReporteFinal  data={proyecto} personal={ListaPersonal}/>}
      fileName="ReporteFinal.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#f6f6f7",
        backgroundColor: "#19b925",             
      }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando Pdf..." : "Descargar Pdf"
      }
    </PDFDownloadLink>
    )
}
export const doc6 =(proyecto, ListaPersonal)=>{
    return(
    <PDFDownloadLink
      document={<LiberacionReporte  data={proyecto} personal={ListaPersonal}/>}
      fileName="LiberacionReporte.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#f6f6f7",
        backgroundColor: "#19b925",             
      }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando Pdf..." : "Descargar Pdf"
      }
    </PDFDownloadLink>
    )
}
export const doc7 =(proyecto, ListaPersonal)=>{
    return(
    <PDFDownloadLink
      document={<AsignacionRevTI  data={proyecto} personal={ListaPersonal}/>}
      fileName="AsignacionRevTI.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#f6f6f7",
        backgroundColor: "#19b925",             
      }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando Pdf..." : "Descargar Pdf"
      }
    </PDFDownloadLink>
    )
}
export const doc8 =(proyecto, ListaPersonal)=>{
    return(
    <PDFDownloadLink
      document={<InformeFinal  data={proyecto} personal={ListaPersonal}/>}
      fileName="InformeFinal.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#f6f6f7",
        backgroundColor: "#19b925",             
      }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando Pdf..." : "Descargar Pdf"
      }
    </PDFDownloadLink>
    )
}
export const doc9 =(proyecto, ListaPersonal)=>{
    return(
    <PDFDownloadLink
      document={<RegistroTitulacion  data={proyecto} personal={ListaPersonal}/>}
      fileName="RegistroTitulacion.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#f6f6f7",
        backgroundColor: "#19b925",             
      }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando Pdf..." : "Descargar Pdf"
      }
    </PDFDownloadLink>
    )
}
export const doc10 =(proyecto, ListaPersonal)=>{
    return(
    <PDFDownloadLink
      document={<LiberacionTitulacion  data={proyecto} personal={ListaPersonal}/>}
      fileName="LiberacionTitulacion.pdf"
      style={{
        textDecoration: "none",
        padding: "10px",
        color: "#f6f6f7",
        backgroundColor: "#19b925",             
      }}
    
    >
      {({ blob, url, loading, error }) =>
        loading ? "Cargando Pdf..." : "Descargar Pdf"
      }
    </PDFDownloadLink>
    )
}
      