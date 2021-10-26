// Se pueden definir los callbacks como estan armados dentro de las funciones

function operacion(
    x: number,
    y: number,
    func: (val1: number, val2: number) => number
): number {
    return func(x, y);
}

let xyz: number = operacion(414, 2, (x: number, y: number): number => { return x * y })