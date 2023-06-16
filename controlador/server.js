import API from '../API/server.js'
import ServicioServer from '../servicio/server.js'

const tragos = [
    { nombre: "cerveza" },
    { nombre: "fernet" }
]

class Controlador {
    constructor() {
        this.api = new API()
    }

    obtenerTragos = (req, res) =>{
    
    

    }
    
    
}

export default Controlador

// this.router.get('/', this.controlador.obtenerInicio)
// this.router.get('/', this.controlador.obtenerReservas)
// this.router.get('/', this.controlador.obtenerCarta)
// this.router.get('/', this.controlador.obtenerTragos)
// this.router.get('/', this.controlador.obtenerPlatos)
// this.router.get('/', this.controlador.obtenerSucursales)
// //this.router.get('/', this.controlador.obtenerSpotify)

