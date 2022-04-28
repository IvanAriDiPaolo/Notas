enum especie { Comun, Angora, Siames, Persa };

class gato {
    nombre: string;
    edad: number;
    esp: especie;

    constructor(n: string, e: number, esp: especie) {
        this.nombre = n;
        this.edad = e;
        this.esp = esp;
    }

    datosGato(): void {
        console.log("Nombre ", this.nombre, " edad ", this.edad, " de especie: ", this.esp)
    }
}

let miGato = new gato('Ivan', 21, especie.Angora);

miGato.datosGato()