import { expect } from 'chai'
import generador from './generador/reserva.js'

describe('Deberia generar una reserva aleatoria'), () => {
const reserva = generador.get()
console.log(reserva)

expect(reserva).to.include.keys('nombre', 'cantidad_personas')
}