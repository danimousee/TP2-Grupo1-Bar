

class ModelTragos{

constructor(){

    this.tragos = [
        { nombre: "cerveza" },
        { nombre: "fernet" }
    ]

}

obtenerTragos = () =>{
    console.log(this.tragos)
    return this.tragos
}

}

export default ModelTragos