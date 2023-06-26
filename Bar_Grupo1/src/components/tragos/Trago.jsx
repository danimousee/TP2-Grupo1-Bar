import { Link } from "react-router-dom";

const Trago = ({ trago }) => {
  return (
    
      <div className="tragosContainer">
        <h1>{trago.nombre}</h1>
        <h2>Precio: ${trago.precio}</h2>
      </div>
    
  );
};
export default Trago;