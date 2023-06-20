import { Outlet } from "react-router-dom";
import Boton from "./boton/Boton";
import Images from "./images/images";
import logo from "../imagenes/Logo_LAMIXTURERIA.png";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="logo">
          <Images url={logo} />
        </div>
        <Boton />
      </div>
    </main>
  );
};
export default Main;
