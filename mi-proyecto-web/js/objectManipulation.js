function promedioEstudiante(estudiante) {
    const calificaciones = estudiante.calificaciones;
    const suma = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    const promedio = suma / calificaciones.length;
    return promedio;
}

// Ejemplo de uso
const estudiante = {
    nombre: "Juan Pérez",
    calificaciones: [85, 90, 78, 92, 88]
};

const promedio = promedioEstudiante(estudiante);
console.log(`El promedio de ${estudiante.nombre} es ${promedio.toFixed(2)}`);