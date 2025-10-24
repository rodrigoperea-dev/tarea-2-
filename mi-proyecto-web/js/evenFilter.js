function filtrarPares(array) {
    return array.filter(num => num % 2 === 0);
}

// Ejemplo de uso
const numerosAleatorios = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
const numerosPares = filtrarPares(numerosAleatorios);
console.log("Números aleatorios:", numerosAleatorios);
console.log("Números pares:", numerosPares);