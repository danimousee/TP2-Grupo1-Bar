import { Link } from "react-router-dom";

const Trago = ({ trago }) => {
  return (
    <Link to={`/detail/${trago.id}`}>
      <div className="tragosContainer">
        <h1>{trago.name}</h1>
        <img src={trago.image} alt={trago.name} />
      </div>
    </Link>
  );
};
export default Trago;