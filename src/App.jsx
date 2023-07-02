import { useState,useEffect } from 'react';
import { obtenerCliente } from './obtenerCliente';
import {  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const [clientes, setClientes] = useState([]);
  const navegar = useNavigate();
  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const data = await obtenerCliente();
        setClientes(data);
        console.log(clientes);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    obtenerClientes();
  }, []);

  const validarClientes = ()=>{
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
     console.table(clientes);
     const clientesFiltrados = clientes.filter(cliente =>
      cliente.correo === correo && cliente.pass === password
    );


    if(clientesFiltrados.length == 0){
      alert("cliente no encontrado");
    }else{
        navegar("/login");
    }
  }

  return (
    <>
       <div className="min-h-screen hero bg-zinc-800 ">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100 bg-zinc-900">
      <div className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="text-white label-text">Correo electronico</span>
          </label>
          <input type="text" placeholder="email" className="transition-all duration-500 border-2 border-gray-300 input input-bordered bg-zinc-900 focus:scale-125 focus:text-white" id='correo'/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-white label-text">Contraseña</span>
          </label>
          <input type="text" placeholder="password" className="transition-all duration-500 border-2 border-gray-300 input input-bordered bg-zinc-900 focus:scale-125 focus:text-white" id='password' />
        </div>
        <div className="mt-6 form-control">
          <button className="text-white bg-orange-600 border-none shadow-md shadow-orange-600 btn hover:bg-orange-700" onClick={validarClientes}>Iniciar seccion</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
