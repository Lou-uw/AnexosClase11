//ejercicio 1

async function crearTarea(tarea) {
    const respuesta = await fetch('http://localhost:3000/tareas', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            texto: tarea,
            hecha: false,
        }),
    });
    const tareaCreada = await respuesta.json();
    console.log("tarea creada", tareaCreada);
    return tareaCreada;
}
//crearTarea("Despertar")


async function borrarTarea(id) {
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "DELETE",
    });

    if(!respuesta.ok) {
        throw new Error(`Error al borrar la tarea ${respuesta.status}`);
    }
    console.log("tarea eliminada", id);
}
//borrarTarea("bmFAIuFYAPY");


async function marcarTareaHecha(id, estado) {
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            hecha: estado,
        }),
    });
    const tareaMarcada = await respuesta.json();
    console.log("estado cambiado", tareaMarcada);
    return tareaMarcada;
}
//marcarTareaHecha("RMqRXPDpvAk", true); 

async function modificarTarea(id, cambioTexto, cambioEstado) {
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            texto: cambioTexto,
            hecha: cambioEstado,
        }),
    });
    const tareaModificada = await respuesta.json();
    console.log("tarea modificada", tareaModificada);
    return tareaModificada;
}
//modificarTarea("bmFAIuFYAPY", "comer", false);

