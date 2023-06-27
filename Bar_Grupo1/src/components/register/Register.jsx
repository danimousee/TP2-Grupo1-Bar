import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    nombre: "",
    cantPersonas: 0,
    email: "",
    telefono: "",
    fecha: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    const dataCopy = { ...data };
    dataCopy[name] = value;
    setData(dataCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
    .post("http://localhost:8080/LaMixtureria/Reservas/",data)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));


  };

  return (
    <div className="formulario">

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        
        <input
          type="text"
          name="nombre"
          value={data.nombre}
          id="nombre"
          onInput={handleInput}
        />
        

        <label htmlFor="cantPersonas">Personas</label>
        <input
          type="number"
          name="cantPersonas"
          id="cantPersonas"
          value={data?.cantPersonas || 1}
          onInput={handleInput}
        />

<label htmlFor="telefono">Telefono</label>
        <input
          type="tel"
          name="telefono"
          id="telefono"
          value={data?.telefono || ""}
          onInput={handleInput}
        />

<label htmlFor="fecha">Fecha de reserva</label>
        <input
          type="datetime-local"
          name="fecha"
          id="fecha"
          value={data?.fecha || ""}
          onInput={handleInput}
        />

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data?.email || ""}
          onInput={handleInput}
        /><br></br>
      
        <button>enviar</button>
      </form>
      
      
    </div>
  );
};
export default Register;