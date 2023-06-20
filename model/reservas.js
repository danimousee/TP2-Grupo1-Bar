import fs from 'fs'
const nombreArchivo = 'reservas.json'
const codificacion = 'utf-8'

class ReservasFS {

    constructor() {
        this.reservas = []
    }

    getNext_Id(reservas) {
        let lg = reservas.length
        return lg? parseInt(reservas[lg-1].id) + 1 : 1
    }

    guardarReserva = async reserva => {
        try {
            this.reservas = JSON.parse(fs.readFileSync(nombreArchivo, codificacion))

            //obtiene el proximo ID
            let id = this.getNext_Id(this.reservas)

            //Obtiene fecha de hoy
            let timestamp = Date.now()

            reserva.id = id
            reserva.fecha_alta = timestamp
            
            //lo persisto en el array en memoria
            this.reservas.push(reserva)

            //lo grabo en el archivo del File System
            fs.writeFileSync(nombreArchivo, JSON.stringify(this.reservas, null, '\t'))

            return reserva
        }
        catch(error) {
            console.log('error en guardarReserva:', error)
            return {}
        }
    }

    obtenerReservas = async () => {
        try {
            this.reservas = JSON.parse(fs.readFileSync(nombreArchivo, codificacion))
            return this.reservas
        }
        catch(error) {
            console.log('error en obtenerReservas', error)
            return []
        }
    }

    obtenerReserva = async id => {
        try {
            this.reservas = JSON.parse(fs.readFileSync(nombreArchivo, codificacion))
            const reserva =  this.reservas.find(reserva => reserva.id == id)
            return reserva || {}
        }
        catch(error) {
            console.log('error en obtenerReserva', error)
            return {}
        }
    }

    eliminarReserva = async id => {
        try {
            this.reservas = JSON.parse(fs.readFileSync(nombreArchivo, codificacion))

            //parametro recibido en el request
            let idDelete = parseInt(id);

            //busca la posicion del array donde se encuentra ese ID
            const indice = this.reservas.findIndex(reserva => reserva.id === idDelete)

            //no encontro el objeto con ese ID
            if(indice == -1){
                return {}
            }
            //lo encontro
            else{
                //lo elimina del array con el indice encontrado
                const reserva = this.reservas.splice(indice, 1)
                fs.writeFileSync(nombreArchivo, JSON.stringify(this.reservas, null, '\t'))

                //solo devuelvo la primera posicion del array de objetos eliminados
                return reserva[0]
            }  
        }
        catch(error) {
            console.log('error en eliminarReserva', error)
            return {}
        }
    }

    actualizarReserva = async (id, reserva) => {
        try {
            this.reservas = JSON.parse(fs.readFileSync(nombreArchivo, codificacion))

            let idUpdate = parseInt(id);
            //busca la posicion del array donde se encuentra ese ID
            const indice = this.reservas.findIndex(reserva => reserva.id === idUpdate)

            if(indice != -1){
                const reservaOld = this.reservas[indice]
                //reservaNew.id = parseInt(id) + 1;

                //la fecha de alta no la modifico mantengo la original
                //let timestamp = Date.now()
                //reservaNew.fecha_alta = timestamp

                const reservaNew = { ...reservaOld, ...reserva }

                //lo actualiza del array con el indice encontrado, con el objeto nuevo
                this.reservas.splice(indice, 1, reservaNew)

                fs.writeFileSync(nombreArchivo, JSON.stringify(this.reservas, null, '\t'))
                return reservaNew
            }
            else{
                return {}
            }
        }
        catch(error) {
            console.log('error en actualizarReserva', error)
            return {}
        }
    }
}

export default ReservasFS
