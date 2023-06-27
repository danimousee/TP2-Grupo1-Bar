import JOI from joi

export const validar = reserva => {
    
    const reservaSchema = Joi.object({
        nombre: JOI.string().alphanum().required(),
        cantidad_personas: JOI.number().min(1).max(20).required(),
    })

    const { error } = reservaSchema.validate(reserva);
    if(error) {
        return { result: false, error }
    }

    return { result: true}
}



