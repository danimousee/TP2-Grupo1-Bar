import { expect } from 'chai'
import generador from './generador/reserva.js'

describe('Test generador de reserva', () => {

it('La reserva deberia poseer campos nombre, cantidad de personas', () => {
    const reserva = generador.get()

    expect(reserva).to.include.keys('nombre', 'cantidad_personas')
})

it('Deberia generar reservas con datos aleatorios', () => {
    const reserv1 = generador.get()
    const reserv2 = generador.get()


    expect(reserv1.nombre).not.to.eql(reserv2.nombre)
    expect(reserv1.cantidad_personas).not.to.eql(reserv2.cantidad_personas)

   })
})
