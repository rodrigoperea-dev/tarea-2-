function calcularPromedio(calificaciones) {
    if (!Array.isArray(calificaciones) || calificaciones.length === 0) {
        return "El array de calificaciones no es válido.";
    }

    const suma = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    const promedio = suma / calificaciones.length;

    return promedio >= 6 ? `Promedio: ${promedio.toFixed(2)} - Aprobado` : `Promedio: ${promedio.toFixed(2)} - Reprobado`;
}