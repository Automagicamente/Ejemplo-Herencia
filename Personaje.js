class Personaje{
    #vida=200;
    #danio=30;

    constructor(vida=0, danio=0){
        this.#vida = vida;
        this.#danio = danio;
    }

    defendeteDe(unEnemigo){
        this.aplicarDanioCon(unEnemigo.getDanio());
    }
    aplicarDanioCon(esteDanio){
        console.log(this.#vida-=esteDanio);
        
    }
    atacarA(unEnemigo){
        unEnemigo.defendeteDe(this);
    }
    getDanio(){
        return this.#danio;
    }
}

module.exports = Personaje;