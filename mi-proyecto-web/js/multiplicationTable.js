function tablaMultiplicar(numero) {
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    return tabla;
}

// Ejemplo de uso
const numeroIngresado = prompt("Ingrese un número para generar la tabla de multiplicar:");
const resultado = tablaMultiplicar(numeroIngresado);
alert(resultado);