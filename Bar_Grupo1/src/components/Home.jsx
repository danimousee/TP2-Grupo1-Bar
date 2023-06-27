import Boton from "./boton/Boton";

const Home = () => {
    return (
      <div className="container">
        <Boton name={"Nuestra Carta"} url= {"/LaMixtureria/Carta"} />
        <br></br>
        <Boton name={"Reservas"} url= {"/LaMixtureria/Reservas"} />
      </div>
    )
  }
  export default Home