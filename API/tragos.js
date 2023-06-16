import ModelTragos from '../model/tragos.js'



class ApiTragos {

    constructor() {
  this.modelTragos = new ModelTragos()
    }

    obtenerTragos = () =>{return this.modelTragos.obtenerTragos()}
}

export default ApiTragos 
