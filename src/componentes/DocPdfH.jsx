import { useEffect,useState } from 'react';
import { obtenerCliente } from '../obtenerCliente';
import { Document, Page, Text, View } from '@react-pdf/renderer';



const MyDocument = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
      const obtenerClientes = async () => {
        try {
          const data = await obtenerCliente();
          setClientes(data);
          console.log(clientes);
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      obtenerClientes();
    }, []);
  
  
    const pageStyle = {
      backgroundColor: "white",
      paddingTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 60,
    };
  
    const contenedor = {
      display:"flex",
      flexDirection:"column",
      justifyContent:'center',
      alignItems:'center',
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
      borderRadius: 10,
      backgroundColor:"white",
      marginBottom: "10px",
      paddingTop:"5px",
      paddingBottom:"5px"
    }
    
    const texto = {
      marginBottom: "4px",
      
    }
  return(    <Document>
        <Page size="A4"  orientation="landscape" style = {pageStyle} >
        <View>
          {clientes.map(cliente => (
              <View key={cliente.id} classname="rounded-md bg-slate-200" style={contenedor}>
                <Text style={texto}>{"Nombre: " + cliente.nombre + " " + cliente.apellidoPaterno + " " + cliente.apellidoMaterno}</Text>
                <Text>{"Correo: " + cliente.correo}</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    );

  }
  
  export default MyDocument;
