enum especieGato { Comun, Angora, Persa, Siames }
enum especiePerro { Rotwailer, Chow, Chiwa, Caniche }

interface animal {
    nombre: string,
    edad: number,
    datos(): void
}

class Gato implements animal {
    nombre: string;
    edad: number;
    especie: especieGato;

    constructor(n: string, e: number, esp: especieGato) {
        this.nombre = n;
        this.edad = e;
        this.especie = esp;
    }

    datos(): void {
        console.log('Soy un gato con las sig caracteristicas: ', this.nombre, this.edad, especieGato[this.especie])
    }
}

class Perro implements animal {
    nombre: string;
    edad: number;
    especie: especiePerro;

    constructor(n: string, e: number, esp: especiePerro) {
        this.nombre = n;
        this.edad = e;
        this.especie = esp;
    }

    datos(): void {
        console.log('Soy un gato con las sig caracteristicas: ', this.nombre, this.edad, especiePerro[this.especie])
    }
}

let gatito = new Gato('Ivan', 21, especieGato.Comun)
let perrito = new Perro('Jose', 22, especiePerro.Chow)

gatito.datos();
perrito.datos();

type Animal2 =
    {
        nombre: string;
        edad: number;
        datos(): void
    }

let jirafa: Animal2 =
{
    nombre: 'Jirafita',
    edad: 21,
    datos(): void {
        console.log("Datos: ", this.nombre, this.edad)
    }
}

jirafa.datos();