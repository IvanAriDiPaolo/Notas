// Se pueden definir lo que recibe una funcion y lo que tiene que devolver:
// Se puede definir en otra linea como tienen que estar hechas las funciones

let numero: number;
let numero2: number;
let cadena: string;
let boolean: boolean;

let a: number, b: number;
a = 0;
b = 1;

let c: number[] = [a, b];

const add = (ar: number[]): number[] => {
    let d: number = 0;
    while (d < 100) {
        d = ar[ar.length - 2] + ar[ar.length - 1];
        ar.push(d)
    }
    return ar;
}
add(c)

let funcionAceptada: (ar: number[]) => number[];
funcionAceptada = add;