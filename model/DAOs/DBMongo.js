import { MongoClient }  from "mongodb";
import config from "../../config";

class CnxMongoDB {
    static client = null
    static connectOk = false
    static db = null

    static conectar = async () => {
        try {
            console.log('Conectando a la base de datos...')
            this.client = new MongoClient(config.STRCNX), {
                useNewUrlParser: true,
                useUnifiedTopology:true
            }
            await this.client.connect()
            console.log('Base de datos conectada!')
            
            this.db = this.client.db(config.BASE)
            this.connectOk = true
        }
        catch(error) {
            console.log('Error en la conexion a la base de datos:', $(error.message))
        }
    }

    static desconectar = () => {
        if(!CnxMongoDB.connectOk) return
        CnxMongoDB.client.close()
    }
}