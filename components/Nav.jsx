import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/tragos">Tragos</Link>
        <Link to="/carta">Carta</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </nav>
  )
}
export default Nav

//La carpeta nav la tendriamos que borrar??