import express from 'express'
import ControladorTragos from '../controlador/tragos.js'
import ControladorReservas from '../controlador/reservas.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controladorTragos = new ControladorTragos()
        this.controladorReservas = new ControladorReservas()
    }

    start() {
        //this.router.get('/', this.controlador.obtenerInicio)
        //this.router.get('/Reservas', this.controlador.obtenerReservas)
       // this.router.get('/Carta', this.controlador.obtenerCarta)
        this.router.get('/Carta/Tragos', this.controladorTragos.obtenerTragos)
        //this.router.get('/Carta/Platos', this.controlador.obtenerPlatos)
        //this.router.get('/Sucursales', this.controlador.obtenerSucursales)
        //this.router.get('/', this.controlador.obtenerSpotify)

        //Reservas
        this.router.get('/Reservas/', this.controladorReservas.obtenerReservas)
        this.router.get('/Reservas/:id', this.controladorReservas.obtenerReserva)
        this.router.post('/Reservas/', this.controladorReservas.guardarReserva)
        this.router.delete('/Reservas/:id', this.controladorReservas.eliminarReserva)
        this.router.put('/Reservas/:id', this.controladorReservas.actualizarReserva)

        return this.router
    }

}   

export default Router

