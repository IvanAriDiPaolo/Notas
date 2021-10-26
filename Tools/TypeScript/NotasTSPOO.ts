interface Persona {
    dameNombre(): void;
}

interface Casa {
    dameDireccion(): void;
}

abstract class Empleado implements Persona, Casa {
    nombre: string;
    direccion: number;
    static empresa: string;

    abstract datosEmpleado(): void;

    constructor(n: string, d: number) {
        this.nombre = n;
        this.direccion = d;
    }

    static datosEmpresa(): void {
        console.log(this.empresa)
    }

    dameNombre(): void {
        console.log(this.nombre)
    }
    dameDireccion(): void {
        console.log(this.direccion)
    }
}

class General extends Empleado {
    // nombre: string;
    // direccion: number;
    datosEmpleado(): void {
        console.log(this.nombre)
        console.log(this.direccion)
    }
}

// Empleado.empresa = 'Ivan SRL.'
// General.datosEmpresa();

// let general = new General('Ivan', 12)

// general.dameNombre()
// general.datosEmpleado()

interface Vehiculo {
    velocidad: number;
    peso: number;
    color: string;
    dameVelocidad(): void;
    damePeso(): void;
    dameColor(): void;
}

class Coche implements Vehiculo {
    velocidad: number;
    peso: number;
    color: string;
    constructor(v: number, p: number, c: string) {
        this.velocidad = v;
        this.peso = p;
        this.color = c;
    }
    dameVelocidad(): void {
        console.log(this.velocidad)
    }
    damePeso(): void {
        console.log(this.peso)
    };
    dameColor(): void {
        console.log(this.color)
    };

}

let auto = new Coche(1, 2, 'a');

auto.dameColor();

abstract class Pesado implements Vehiculo {
    velocidad: number;
    peso: number;
    color: string;
    ruedas: number;
    constructor(v: number, p: number, c: string, r: number) {
        this.velocidad = v;
        this.peso = p;
        this.color = c;
        this.ruedas = r;
    }
    dameVelocidad(): void {
        console.log(this.velocidad)
    }
    damePeso(): void {
        console.log(this.peso)
    };
    dameColor(): void {
        console.log(this.color)
    };
}

class Camion extends Pesado {

    dameRuedas(): void {
        console.log(this.ruedas)
    };
}

let camionsito = new Camion(1, 2, 'c', 3)
camionsito.dameVelocidad()