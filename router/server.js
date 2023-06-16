import express from 'express'
import ControladorTragos from '../controlador/tragos.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controladorTragos = new ControladorTragos()
    }

    start() {
        //this.router.get('/', this.controlador.obtenerInicio)
        //this.router.get('/Reservas', this.controlador.obtenerReservas)
       // this.router.get('/Carta', this.controlador.obtenerCarta)
        this.router.get('/Carta/Tragos', this.controladorTragos.obtenerTragos)
        //this.router.get('/Carta/Platos', this.controlador.obtenerPlatos)
        //this.router.get('/Sucursales', this.controlador.obtenerSucursales)
        //this.router.get('/', this.controlador.obtenerSpotify)

        return this.router
    }

}   

export default Router

