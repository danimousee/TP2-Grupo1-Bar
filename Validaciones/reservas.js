import JOI from 'joi'

export const validar = reserva => {
    
    const reservaSchema = JOI.object({
        nombre: JOI.string().alphanum().required(),
        cantidad_personas: JOI.number().min(1).max(20).required(),
        email: JOI.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        telefono: JOI.number().required(),
        fecha_reserva: JOI.date().required()
    })

    const { error } = reservaSchema.validate(reserva);
    if(error) {
        return { result: false, error }
    }

    return { result: true}
}




