import express from 'express'
import Controlador from '../controlador/server.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/', this.controlador.obtenerInicio)
        this.router.get('/', this.controlador.obtenerReservas)
        this.router.get('/', this.controlador.obtenerCarta)
        this.router.get('/', this.controlador.obtenerTragos)
        this.router.get('/', this.controlador.obtenerPlatos)
        this.router.get('/', this.controlador.obtenerSucursales)
        //this.router.get('/', this.controlador.obtenerSpotify)
    }

}   

export default Router

app.use('/LaMixtureria', RouterServer().start())

app.use('/LaMixtureria/Reservas', RouterServer().start)

app.use('/LaMixtureria/Carta', RouterServer().start)
    app.use('/LaMixtureria/Carta/Platos', RouterServer().start)
    app.use('/LaMixtureria/Carta/Tragos', RouterServer().start)

app.use('/LaMixtureria/Sucursales', RouterServer().start)