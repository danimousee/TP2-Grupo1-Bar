import express from 'express'
import RouterServer from './router/server.js'
import config from './config.js'
import CnxMongoDB from './model/DBMongo.js'

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


/* ------------------------------------------------------------- */
/*             API REST Ful                                      */
/* ------------------------------------------------------------- */

app.use('/LaMixtureria', new RouterServer().start())

//app.use('/LaMixtureria/Playlist', RouterServer().start)


/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */
if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}
const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto http://127.0.0.1:${PORT}`))
server.on('error', error => console.log('Servidor express en error:', error) )