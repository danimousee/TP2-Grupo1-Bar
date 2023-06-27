
import { Outlet } from "react-router-dom";
import Back from "./back/Back";

const Main = () => {
  return (
    <main>
      <Back/>
      <Outlet/>
    </main>
  );
};
export default Main;