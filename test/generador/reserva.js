import { faker } from '@faker-js/faker/locale/en'

const get = _ => ({
    nombre: faker.commerce.product(),
    cantidad_personas: faker.number.int({ min: 1, max: 100 })
})

export default {
    get
}