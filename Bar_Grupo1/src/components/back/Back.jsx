import { Link } from "react-router-dom";
import Images from "../images/images";
import logo from "../../imagenes/Logo_LAMIXTURERIA.png";


const Back = () => {
  return (
    <div className="logo">
    <Link to={"/LaMixtureria"}>
    <Images url={logo} />
    </Link>
    </div>
  );
};
export default Back;