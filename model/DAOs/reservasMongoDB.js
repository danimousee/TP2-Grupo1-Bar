import { ObjectId } from "mongodb"
import CnxMongoDB from "../DBMongo.js"

class ModelMongoDB {

    constructor() {

    }

    obtenerReservas = async id => {
        if(!CnxMongoDB.connectOk) return id? {} : []
        if(id) {
            const reserva = await CnxMongoDB.db.collection('reservas').findOne({_id: new ObjectId(id)})
            return reserva
        }
        else {
            const reservas = await CnxMongoDB.db.collection('reservas').find({}).toArray()
            return reservas
        }
    }

    guardarReserva = async reserva => {
        if(!CnxMongoDB.connectOk) return {}

        await CnxMongoDB.db.collection('reservas').insertOne(reserva)
        return reserva
    }

    actualizarReserva = async (id, reserva) => {
        if(!CnxMongoDB.connectOk) return {}

        console.log(id, producto)

        await CnxMongoDB.db.collection('reservas').updateOne(
        {_id: new ObjectId(id)},
        { $set: reserva}
        )

        const reservaActualizada = await this.obtenerReservas(id)
        return reservaActualizada
    }

    eliminarReserva = async id => {
        if(!CnxMongoDB.connectOk) return {}

        const reservaEliminada = await this.obtenerReservas(id)
        await CnxMongoDB.db.collection('reservas').deleteOne({_id: new ObjectId(id)})

        return reservaEliminada
    }
}

export default ModelMongoDB