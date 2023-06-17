import Back from "../back/Back";
//import Counter from "../counter/Counter";

const TragoDetail = ({ trago }) => {


  return (
    <div>
      <h1>{trago.name}</h1>
    
      


      <img src={trago.image} alt={trago.name} />
      <Back url="tragos"/>
      {}
    </div>
  );
};
export default TragoDetail;

//Las 2 lineas de abajo estaban en las lineas 11 y 12

      //<h2>Status:{trago.status}</h2>
      //<h3>Location: {trago?.location?.name}</h3>

//Por ahora las saque asi despues ponemos bien los detalles del trago