import Title from "./Title";
import Nav from "/Nav";

const Header = () => {
  return (
    <header>
      <Title nombre="Titulo del Header" color="black" />
      <Nav link1={"Home"} link2={"Carta"} link3={"Sucursales"} />
    </header>
  );
};
// Seguir agregando los links a medida que hacemos mas funcionalidades
export default Header;