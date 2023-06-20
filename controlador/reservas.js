import _ from 'lodash';
import ApiReservas from '../API/reservas.js'

class ControladorReservas {

    constructor() {
        this.apiReservas = new ApiReservas()
    }

    obtenerReservas = async (req,res) => {
        try {
            let reservas = await this.apiReservas.obtenerReservas()

            res.send(reservas)
        }
        catch(error) {
            console.log('error obtenerReservas', error)
        }
    }

    obtenerReserva = async (req,res) => {
        try {
            let idReser = req.params.id
            let reservas = await this.apiReservas.obtenerReserva(idReser)

            res.send(reservas)
        }
        catch(error) {
            console.log('error obtenerReserva', error)
        }
    }

    guardarReserva = async (req,res) => {
        try {
            let reserva = req.body
            let reservaSave = await this.apiReservas.guardarReserva(reserva)

            res.json(reservaSave)
        }
        catch(error) {
            console.log('error obtenerReservas', error)
        }
    }

    eliminarReserva = async (req,res) => {
        try {
            let idDelete = req.params.id
            let reservaDeleted = await this.apiReservas.eliminarReserva(idDelete)

            res.send(reservaDeleted)
        }
        catch(error) {
            console.log('error eliminarReserva', error)
        }
    }

    actualizarReserva = async (req,res) => {
        try {
            let posUpdate = req.params.id
            let reservaNew = req.body
            let reservaOld = await this.apiReservas.actualizarReserva(posUpdate, reservaNew)

            if( _.isEmpty(reservaOld) ){
                res.send(reservaOld)
            }
            else{
                const reservaResponse = { ...reservaOld, ...reservaNew }
                res.send(reservaResponse)
            }

        }
        catch(error) {
            console.log('error actualizarReserva', error)
        }
    }
}

export default ControladorReservas
