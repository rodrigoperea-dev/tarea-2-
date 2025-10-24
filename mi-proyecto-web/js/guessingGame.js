function verificar(numeroUsuario, numeroSecreto) {
    if (numeroUsuario < 1 || numeroUsuario > 100) {
        return "Por favor, ingresa un número entre 1 y 100.";
    }
    
    if (numeroUsuario === numeroSecreto) {
        return "¡Felicidades! Has adivinado el número.";
    } else if (numeroUsuario < numeroSecreto) {
        return "El número es mayor. Intenta de nuevo.";
    } else {
        return "El número es menor. Intenta de nuevo.";
    }
}

// Ejemplo de uso
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentoUsuario = prompt("Adivina el número entre 1 y 100:");
let resultado = verificar(parseInt(intentoUsuario), numeroSecreto);
alert(resultado);