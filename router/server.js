import express from 'express'
import Controlador from '../controlador/server.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/LaMixtureria', this.controlador.obtenerInicio)
        this.router.get('/LaMixtureria/Reservas', this.controlador.obtenerReservas)
        this.router.get('/LaMixtureria/Carta', this.controlador.obtenerCarta)
        this.router.get('/LaMixtureria/Carta/Tragos', this.controlador.obtenerTragos)
        this.router.get('/LaMixtureria/Carta/Platos', this.controlador.obtenerPlatos)
        this.router.get('/LaMixtureria/Sucursales', this.controlador.obtenerSucursales)
        //this.router.get('/', this.controlador.obtenerSpotify)
    }

}   

export default Router

