//import ReservasFS from '../model/DAOs/reservasFS.js'
import ModelMongoDB from '../model/DAOs/reservasMongoDB.js'
import MailSender from './mailSender.js'

class ApiReservas {

    constructor() {
        this.reservasDAO = new ModelMongoDB()
    }

    async obtenerReservas() { 
        return await this.reservasDAO.obtenerReservas()
    }

    async obtenerReserva(id) { 
        return await this.reservasDAO.obtenerReservas(id)
    }

    async guardarReserva(reserva) { 
        let reservaNew = await this.reservasDAO.guardarReserva(reserva) 

        //envio el email de reserva
        MailSender.enviarMailReserva(reservaNew)
        
        return reservaNew
    }

    async eliminarReserva(id) { 
        return await this.reservasDAO.eliminarReserva(id) 
    }

    async actualizarReserva(id, reservaNew) { 
        return await this.reservasDAO.actualizarReserva(id, reservaNew) 
    }

}

export default ApiReservas