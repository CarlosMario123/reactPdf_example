export const obtenerCliente = async () => {

    let info = [];
    //hacemos la peticion http
    await fetch('http://localhost:9000/clientes')
    .then(response => response.json())
    .then(data => {
      info = data;
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error:', error);
    });
  
    const clientes = info.map((cliente) => ({
      nombre: cliente.nombre,
     apellidoPaterno: cliente.apellido_paterno,
     apellidoMaterno: cliente.apellido_materno,
     correo:cliente.correo_electronico,
      id:cliente.id,
      pass:cliente.password
    }));
    console.log("inicio")
    console.log(clientes)
    return clientes;
  };
  