import { expect } from "chai"
import supertest from "supertest"
import generador from './generador/reserva.js'
import Server from './generador/reserva.js'

const request = supertest('http://127.0.0.1:8080')

describe('test apirest ful', () => {

    describe('GET', () => {
        it('deberia retornar un status 200', async () => {
           const server = new Server(8081, 'MONGODB')
           const app = await server.start()

           const request = supertest(app)
           const response = await request.get('/LaMixtureria')

           expect(response.status).to.eql(200)

           server.stop()
        })
    })

    describe('POST', () => {
        it('deberia incorporar una reserva', async () => {
            const server = new Server(8081, 'MONGODB')
            const app = await server.start()

            const request = supertest(app)
            
            const reserva = generador.get()
            console.log(reserva)

            const response = await request.post('/LaMixtureria').send(reserva)
            expect(response.status).to.eql(200)

            const reser = response.body
            expect(reser).to.include.keys('nombre', 'cantidad_personas')

            expect(reser.nombre).to.eql(reserva.nombre)
            expect(reser.cantidad_personas).to.eql(reserva.cantidad_personas)

            await server.stop()
        })

         


    })

})

