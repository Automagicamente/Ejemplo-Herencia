const Humano = require("./Humano");
const Monstruo = require("./Monstruo");
const Personaje = require("./Personaje");

const humano = new Humano(100, 50);
const monstruo = new Monstruo(200, 30);


console.log(humano instanceof Personaje);
console.log(monstruo instanceof Personaje);
