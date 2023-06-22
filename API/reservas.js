import ReservasFS from '../model/DAOs/reservasFS.js'

class ApiReservas {

    constructor() {
        this.reservasDAO = new ReservasFS()
    }

    async obtenerReservas() { 
        return await this.reservasDAO.obtenerReservas()
    }

    async obtenerReserva(id) { 
        return await this.reservasDAO.obtenerReserva(id)
    }

    async guardarReserva(reserva) { 
        return await this.reservasDAO.guardarReserva(reserva) 
    }

    async eliminarReserva(id) { 
        return await this.reservasDAO.eliminarReserva(id) 
    }

    async actualizarReserva(id, reservaNew) { 
        return await this.reservasDAO.actualizarReserva(id, reservaNew) 
    }

}

export default ApiReservas