import {StyleSheet } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components'
export const Header = styled.Text`
  color: grey;
  font-size: 8,
  font-family: 'arial',
  font-weight: 'bold'
  text-align: center;
  margin-top: 30px;
`;

export const styles = StyleSheet.create({

      pageBackground: {
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',
        display: 'block',
        height: '100%',
        width: '100%',
      },
      footer: {
        fontSize: 12,
        fontFamily: 'Lato Bold',
        textAlign: 'center',
        marginTop: 25,
        paddingTop: 10,
        borderWidth: 3,
        borderColor: 'gray',
        borderStyle: 'dashed',
        '@media orientation: landscape': {
          marginTop: 10,
        },
      },
      asunto:{
        marginTop: '5cm',
        marginRight: '25mm', 
        fontSize: 10,
        fontFamily: 'Times-Roman',
        textAlign: 'right', 
        maxWidth:'240px' ,
        alignSelf:'flex-end'       
      },
      asuntoE:{
        marginTop: '5cm',
        marginRight: '25mm', 
        fontSize: 10,
        fontFamily: 'Times-Roman',
        textAlign: 'right', 
        maxWidth:'260px' ,
        alignSelf:'flex-end'       
      },
      destinatario:{
        marginRight: '2cm', 
        marginLeft: '2cm',   
        fontSize: 10,
        fontFamily: 'Times-Bold',
        fontWeight: 'extrabold',
        textAlign: 'left',
        textTransform: 'uppercase',
        marginTop: '1cm',        
      },
      destinatario2:{
        marginRight: '2cm', 
        marginLeft: '2cm',   
        fontSize: 12,
        fontFamily: 'Helvetica-Bold',
        textAlign: 'left',
        textTransform: 'uppercase',
        marginTop: '1cm',        
      },
      body:{
        marginRight: '2cm', 
        marginLeft: '2cm', 
        paddingTop: 20,
        fontSize: 10,
        textAlign:'justify'
      },
      body2:{
        marginRight: '2cm', 
        marginLeft: '2cm', 
        paddingTop: 20,
        fontSize: 11,
        textAlign:'justify'
      },
      atte:{ 
        marginLeft: '2cm', 
        paddingTop: 20,
        textAlign: 'left',
        fontSize: '8'
      },
      destinatarioDer:{ 
        marginRight: '2cm', 
        paddingTop: 100,
        textAlign: 'right',
        fontSize: '10',
        textTransform:'uppercase'
      },

      nota:{ 
        marginLeft: '2cm', 
        marginBottom: '3cm',
        marginTop: '2cm',
        textAlign: 'left',
        fontSize: '7'
      },
      asesor:{ 
        marginRight: '3cm', 
        paddingTop: 10,
        textAlign: 'right',
        fontSize: '6'
      },
    });

const BORDER_COLOR = '#bfbfbf'
const BORDER_STYLE = 'solid'
const COL1_WIDTH = 30
const COLN_WIDTH = (100 - COL1_WIDTH)
export const tables = StyleSheet.create({
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
    borderBottomWidth: 0,
    marginTop:'10px',
    marginRight: '2cm', 
    marginLeft: '2cm',         
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
    borderTopWidth: 0
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
    borderTopWidth: 0 
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
    fontWeight: 500,
    textAlign: 'left'
  },  
  tableCell: { 
    margin: 5, 
    fontSize: 10, 
    textAlign: 'left',
    textTransform: 'uppercase'
  }, 
  tableCell2: { 
    margin: 3, 
    fontSize: 9, 
    textAlign: 'left',
    textTransform: 'uppercase'
  }

});


const COL1_WIDTH2 = 30
const COLN_WIDTH2 = (100 - COL1_WIDTH2)
export const tables2 = StyleSheet.create({
  body: {
    padding: 10
  },
  table: { 
    display: "table", 
    width: "180px", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0,
    marginTop:'10px',
    marginRight: '2cm', 
    marginLeft: '2cm',   
    alignSelf:'flex-end'      
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row"
  }, 
  tableCol1: { 
    width: '70px', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },   
  tableCol: { 
    width: '110px', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableCol2: { 
    width: '40px', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  } ,
  tableCellHeader: {
    margin: 5, 
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'left'
  },  
  tableCell: { 
    margin: 3, 
    fontSize: 9, 
    textAlign: 'justify',
    textTransform: 'uppercase'
  } ,
  tableCellC: { 
    margin: 3, 
    fontSize: 9, 
    textAlign: 'center',
    textTransform: 'uppercase'
  } 
});

const COL1_WIDTH3 = 6
const COLN_WIDTH3 = ((730-340)/3)
const asesor =(COLN_WIDTH3/2)
export const tables3 = StyleSheet.create({
  body: {
    padding: 10
  },
  table: { 
    display: "table", 
    width: "730px", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0,
    marginTop:'10px',
    marginRight: '1cm', 
    marginLeft: '1cm',         
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  
  tableCol1: { 
    width:'30px',
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },   
  tableCol: { 
    width:COLN_WIDTH3+"px",
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableCol2: { 
    width:asesor+"px",
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableColM: { 
    width:"60px",
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableColc: { 
    width:"20px",
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  } ,
  tableColE: { 
    width:"90px",
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  } ,
  tableColD: { 
    width:"70px",
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableColA: { 
    width:asesor+"px",
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderBottomWidth: 0, 
  },
  tableCellHeader: {
    margin: 5, 
    fontSize: 12,
    fontWeight: 500,
    textAlign: 'left'
  },  
  tableCell: { 
    margin: 2, 
    fontFamily:'Helvetica-Bold',
    fontSize: 10, 
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});