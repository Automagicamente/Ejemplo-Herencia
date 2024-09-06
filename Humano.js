const Personaje = require("./Personaje");

class Humano extends Personaje{
    #sensibilidad
    constructor(vida, danio, sensibilidad){
        super(vida, danio);
        this.#sensibilidad = sensibilidad;
    }
}

module.exports = Humano;